import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

type SafeUsuario = Omit<Usuario, 'senha_hash'>;
type LoginCredentials = {
  email: string;
  senha: string;
};

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const existingUser = await this.usuarioRepository.findOne({
      where: { email: createUsuarioDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const usuario = this.usuarioRepository.create({
      nome: createUsuarioDto.nome,
      email: createUsuarioDto.email,
      senha_hash: await bcrypt.hash(createUsuarioDto.senha, 10),
      tipo: createUsuarioDto.tipo,
      telefone: createUsuarioDto.telefone ?? null,
    });

    const savedUser = await this.usuarioRepository.save(usuario);

    return savedUser;
  }

  async findAll(): Promise<SafeUsuario[]> {
    const usuarios = await this.usuarioRepository.find();

    return usuarios.map((usuario) => this.toSafeUser(usuario));
  }

  async findOne(id: string): Promise<SafeUsuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });

    if (!usuario) {
      throw new NotFoundException('Usuario not found');
    }

    return this.toSafeUser(usuario);
  }

  async update(
    id: string,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<SafeUsuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });

    if (!usuario) {
      throw new NotFoundException('Usuario not found');
    }

    if (updateUsuarioDto.email && updateUsuarioDto.email !== usuario.email) {
      const existingUser = await this.usuarioRepository.findOne({
        where: { email: updateUsuarioDto.email },
      });

      if (existingUser) {
        throw new ConflictException('Email already in use');
      }
    }

    if (updateUsuarioDto.senha) {
      usuario.senha_hash = await bcrypt.hash(updateUsuarioDto.senha, 10);
    }

    usuario.nome = updateUsuarioDto.nome ?? usuario.nome;
    usuario.email = updateUsuarioDto.email ?? usuario.email;
    usuario.tipo = updateUsuarioDto.tipo ?? usuario.tipo;
    usuario.telefone = updateUsuarioDto.telefone ?? usuario.telefone;

    const savedUser = await this.usuarioRepository.save(usuario);

    return this.toSafeUser(savedUser);
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    const result = await this.usuarioRepository.delete(id);

    if (!result.affected) {
      throw new NotFoundException('Usuario not found');
    }

    return { deleted: true };
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return this.usuarioRepository.findOne({ where: { email } });
  }

  async validateLogin(loginDto: LoginCredentials): Promise<Usuario> {
    const usuario = await this.findByEmail(loginDto.email);

    if (!usuario) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.senha,
      usuario.senha_hash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return usuario;
  }

  toSafeUser(usuario: Usuario): SafeUsuario {
    const { senha_hash, ...safeUser } = usuario;

    return safeUser;
  }
}

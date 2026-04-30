import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { CreateUsuarioDto } from '../usuario/dto/create-usuario.dto';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login.dto';
import { RequestUser } from './request-user.type';
import { Role } from './roles.enum';

type AuthTokenPayload = RequestUser & { sub: string };
type AuthResponse = {
  access_token: string;
  usuario: Omit<Usuario, 'senha_hash'>;
};

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUsuarioDto: CreateUsuarioDto): Promise<AuthResponse> {
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

    return this.buildAuthResponse(savedUser);
  }

  async login(loginDto: LoginDto): Promise<AuthResponse> {
    const usuario = await this.usuarioRepository.findOne({
      where: { email: loginDto.email },
    });

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

    return this.buildAuthResponse(usuario);
  }

  private buildAuthResponse(usuario: Usuario): AuthResponse {
    const payload = this.buildPayload(usuario);
    const { senha_hash, ...safeUser } = usuario;

    return {
      access_token: this.jwtService.sign(payload),
      usuario: safeUser,
    };
  }

  private buildPayload(usuario: Usuario): AuthTokenPayload {
    const tipo = usuario.tipo as Role;

    return {
      sub: usuario.id,
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      tipo,
      roles: [tipo],
    };
  }
}

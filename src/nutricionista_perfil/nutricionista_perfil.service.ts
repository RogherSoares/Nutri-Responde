import { Injectable } from '@nestjs/common';
import { CreateNutricionistaPerfilDto } from './dto/create-nutricionista_perfil.dto';
import { UpdateNutricionistaPerfilDto } from './dto/update-nutricionista_perfil.dto';

@Injectable()
export class NutricionistaPerfilService {
  create(createNutricionistaPerfilDto: CreateNutricionistaPerfilDto) {
    return 'This action adds a new nutricionistaPerfil';
  }

  findAll() {
    return `This action returns all nutricionistaPerfil`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nutricionistaPerfil`;
  }

  update(
    id: number,
    updateNutricionistaPerfilDto: UpdateNutricionistaPerfilDto,
  ) {
    return `This action updates a #${id} nutricionistaPerfil`;
  }

  remove(id: number) {
    return `This action removes a #${id} nutricionistaPerfil`;
  }
}

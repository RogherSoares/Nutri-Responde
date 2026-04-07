import { Injectable } from '@nestjs/common';
import { CreateNutricionistaEspecialidadeDto } from './dto/create-nutricionista_especialidade.dto';
import { UpdateNutricionistaEspecialidadeDto } from './dto/update-nutricionista_especialidade.dto';

@Injectable()
export class NutricionistaEspecialidadeService {
  create(
    createNutricionistaEspecialidadeDto: CreateNutricionistaEspecialidadeDto,
  ) {
    return 'This action adds a new nutricionistaEspecialidade';
  }

  findAll() {
    return `This action returns all nutricionistaEspecialidade`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nutricionistaEspecialidade`;
  }

  update(
    id: number,
    updateNutricionistaEspecialidadeDto: UpdateNutricionistaEspecialidadeDto,
  ) {
    return `This action updates a #${id} nutricionistaEspecialidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} nutricionistaEspecialidade`;
  }
}

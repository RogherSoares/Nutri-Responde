import { Injectable } from '@nestjs/common';
import { CreatePlanoNutricionalDto } from './dto/create-plano_nutricional.dto';
import { UpdatePlanoNutricionalDto } from './dto/update-plano_nutricional.dto';

@Injectable()
export class PlanoNutricionalService {
  create(createPlanoNutricionalDto: CreatePlanoNutricionalDto) {
    return 'This action adds a new planoNutricional';
  }

  findAll() {
    return `This action returns all planoNutricional`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planoNutricional`;
  }

  update(id: number, updatePlanoNutricionalDto: UpdatePlanoNutricionalDto) {
    return `This action updates a #${id} planoNutricional`;
  }

  remove(id: number) {
    return `This action removes a #${id} planoNutricional`;
  }
}

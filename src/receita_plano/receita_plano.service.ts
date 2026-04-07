import { Injectable } from '@nestjs/common';
import { CreateReceitaPlanoDto } from './dto/create-receita_plano.dto';
import { UpdateReceitaPlanoDto } from './dto/update-receita_plano.dto';

@Injectable()
export class ReceitaPlanoService {
  create(createReceitaPlanoDto: CreateReceitaPlanoDto) {
    return 'This action adds a new receitaPlano';
  }

  findAll() {
    return `This action returns all receitaPlano`;
  }

  findOne(id: number) {
    return `This action returns a #${id} receitaPlano`;
  }

  update(id: number, updateReceitaPlanoDto: UpdateReceitaPlanoDto) {
    return `This action updates a #${id} receitaPlano`;
  }

  remove(id: number) {
    return `This action removes a #${id} receitaPlano`;
  }
}

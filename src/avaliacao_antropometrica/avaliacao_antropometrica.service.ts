import { Injectable } from '@nestjs/common';
import { CreateAvaliacaoAntropometricaDto } from './dto/create-avaliacao_antropometrica.dto';
import { UpdateAvaliacaoAntropometricaDto } from './dto/update-avaliacao_antropometrica.dto';

@Injectable()
export class AvaliacaoAntropometricaService {
  create(createAvaliacaoAntropometricaDto: CreateAvaliacaoAntropometricaDto) {
    return 'This action adds a new avaliacaoAntropometrica';
  }

  findAll() {
    return `This action returns all avaliacaoAntropometrica`;
  }

  findOne(id: number) {
    return `This action returns a #${id} avaliacaoAntropometrica`;
  }

  update(
    id: number,
    updateAvaliacaoAntropometricaDto: UpdateAvaliacaoAntropometricaDto,
  ) {
    return `This action updates a #${id} avaliacaoAntropometrica`;
  }

  remove(id: number) {
    return `This action removes a #${id} avaliacaoAntropometrica`;
  }
}

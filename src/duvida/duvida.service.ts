import { Injectable } from '@nestjs/common';
import { CreateDuvidaDto } from './dto/create-duvida.dto';
import { UpdateDuvidaDto } from './dto/update-duvida.dto';

@Injectable()
export class DuvidaService {
  create(createDuvidaDto: CreateDuvidaDto) {
    return 'This action adds a new duvida';
  }

  findAll() {
    return `This action returns all duvida`;
  }

  findOne(id: number) {
    return `This action returns a #${id} duvida`;
  }

  update(id: number, updateDuvidaDto: UpdateDuvidaDto) {
    return `This action updates a #${id} duvida`;
  }

  remove(id: number) {
    return `This action removes a #${id} duvida`;
  }
}

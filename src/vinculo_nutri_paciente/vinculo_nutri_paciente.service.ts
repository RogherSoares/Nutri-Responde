import { Injectable } from '@nestjs/common';
import { CreateVinculoNutriPacienteDto } from './dto/create-vinculo_nutri_paciente.dto';
import { UpdateVinculoNutriPacienteDto } from './dto/update-vinculo_nutri_paciente.dto';

@Injectable()
export class VinculoNutriPacienteService {
  create(createVinculoNutriPacienteDto: CreateVinculoNutriPacienteDto) {
    return 'This action adds a new vinculoNutriPaciente';
  }

  findAll() {
    return `This action returns all vinculoNutriPaciente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vinculoNutriPaciente`;
  }

  update(
    id: number,
    updateVinculoNutriPacienteDto: UpdateVinculoNutriPacienteDto,
  ) {
    return `This action updates a #${id} vinculoNutriPaciente`;
  }

  remove(id: number) {
    return `This action removes a #${id} vinculoNutriPaciente`;
  }
}

import { PartialType } from '@nestjs/mapped-types';
import { CreateVinculoNutriPacienteDto } from './create-vinculo_nutri_paciente.dto';

export class UpdateVinculoNutriPacienteDto extends PartialType(
  CreateVinculoNutriPacienteDto,
) {}

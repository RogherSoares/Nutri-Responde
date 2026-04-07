import { PartialType } from '@nestjs/mapped-types';
import { CreateNutricionistaEspecialidadeDto } from './create-nutricionista_especialidade.dto';

export class UpdateNutricionistaEspecialidadeDto extends PartialType(
  CreateNutricionistaEspecialidadeDto,
) {}

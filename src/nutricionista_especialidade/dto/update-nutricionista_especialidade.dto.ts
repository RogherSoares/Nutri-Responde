import { PartialType } from '@nestjs/swagger';
import { CreateNutricionistaEspecialidadeDto } from './create-nutricionista_especialidade.dto';

export class UpdateNutricionistaEspecialidadeDto extends PartialType(
  CreateNutricionistaEspecialidadeDto,
) {}

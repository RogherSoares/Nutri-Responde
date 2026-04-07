import { PartialType } from '@nestjs/mapped-types';
import { CreateNutricionistaPerfilDto } from './create-nutricionista_perfil.dto';

export class UpdateNutricionistaPerfilDto extends PartialType(
  CreateNutricionistaPerfilDto,
) {}

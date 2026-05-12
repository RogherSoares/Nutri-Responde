import { PartialType } from '@nestjs/swagger';
import { CreateNutricionistaPerfilDto } from './create-nutricionista_perfil.dto';

export class UpdateNutricionistaPerfilDto extends PartialType(
  CreateNutricionistaPerfilDto,
) {}

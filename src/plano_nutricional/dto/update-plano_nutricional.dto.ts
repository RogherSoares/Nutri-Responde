import { PartialType } from '@nestjs/swagger';
import { CreatePlanoNutricionalDto } from './create-plano_nutricional.dto';

export class UpdatePlanoNutricionalDto extends PartialType(
  CreatePlanoNutricionalDto,
) {}

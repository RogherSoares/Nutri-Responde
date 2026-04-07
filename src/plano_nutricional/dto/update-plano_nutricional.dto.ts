import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanoNutricionalDto } from './create-plano_nutricional.dto';

export class UpdatePlanoNutricionalDto extends PartialType(
  CreatePlanoNutricionalDto,
) {}

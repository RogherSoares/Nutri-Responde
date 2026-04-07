import { PartialType } from '@nestjs/mapped-types';
import { CreateAvaliacaoAntropometricaDto } from './create-avaliacao_antropometrica.dto';

export class UpdateAvaliacaoAntropometricaDto extends PartialType(
  CreateAvaliacaoAntropometricaDto,
) {}

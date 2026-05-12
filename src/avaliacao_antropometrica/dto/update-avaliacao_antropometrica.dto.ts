import { PartialType } from '@nestjs/swagger';
import { CreateAvaliacaoAntropometricaDto } from './create-avaliacao_antropometrica.dto';

export class UpdateAvaliacaoAntropometricaDto extends PartialType(
  CreateAvaliacaoAntropometricaDto,
) {}

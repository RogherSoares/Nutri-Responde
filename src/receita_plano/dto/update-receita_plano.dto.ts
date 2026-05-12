import { PartialType } from '@nestjs/swagger';
import { CreateReceitaPlanoDto } from './create-receita_plano.dto';

export class UpdateReceitaPlanoDto extends PartialType(CreateReceitaPlanoDto) {}

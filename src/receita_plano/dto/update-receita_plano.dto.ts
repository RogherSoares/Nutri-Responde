import { PartialType } from '@nestjs/mapped-types';
import { CreateReceitaPlanoDto } from './create-receita_plano.dto';

export class UpdateReceitaPlanoDto extends PartialType(CreateReceitaPlanoDto) {}

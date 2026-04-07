import { PartialType } from '@nestjs/mapped-types';
import { CreateDuvidaDto } from './create-duvida.dto';

export class UpdateDuvidaDto extends PartialType(CreateDuvidaDto) {}

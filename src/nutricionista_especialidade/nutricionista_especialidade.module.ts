import { Module } from '@nestjs/common';
import { NutricionistaEspecialidadeService } from './nutricionista_especialidade.service';
import { NutricionistaEspecialidadeController } from './nutricionista_especialidade.controller';

@Module({
  controllers: [NutricionistaEspecialidadeController],
  providers: [NutricionistaEspecialidadeService],
})
export class NutricionistaEspecialidadeModule {}

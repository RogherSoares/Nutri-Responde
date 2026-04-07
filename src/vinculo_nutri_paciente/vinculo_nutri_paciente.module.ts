import { Module } from '@nestjs/common';
import { VinculoNutriPacienteService } from './vinculo_nutri_paciente.service';
import { VinculoNutriPacienteController } from './vinculo_nutri_paciente.controller';

@Module({
  controllers: [VinculoNutriPacienteController],
  providers: [VinculoNutriPacienteService],
})
export class VinculoNutriPacienteModule {}

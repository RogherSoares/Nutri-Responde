import { Test, TestingModule } from '@nestjs/testing';
import { VinculoNutriPacienteController } from './vinculo_nutri_paciente.controller';
import { VinculoNutriPacienteService } from './vinculo_nutri_paciente.service';

describe('VinculoNutriPacienteController', () => {
  let controller: VinculoNutriPacienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VinculoNutriPacienteController],
      providers: [VinculoNutriPacienteService],
    }).compile();

    controller = module.get<VinculoNutriPacienteController>(
      VinculoNutriPacienteController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

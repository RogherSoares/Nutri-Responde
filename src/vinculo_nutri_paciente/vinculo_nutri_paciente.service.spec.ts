import { Test, TestingModule } from '@nestjs/testing';
import { VinculoNutriPacienteService } from './vinculo_nutri_paciente.service';

describe('VinculoNutriPacienteService', () => {
  let service: VinculoNutriPacienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VinculoNutriPacienteService],
    }).compile();

    service = module.get<VinculoNutriPacienteService>(
      VinculoNutriPacienteService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

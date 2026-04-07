import { Test, TestingModule } from '@nestjs/testing';
import { NutricionistaEspecialidadeService } from './nutricionista_especialidade.service';

describe('NutricionistaEspecialidadeService', () => {
  let service: NutricionistaEspecialidadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutricionistaEspecialidadeService],
    }).compile();

    service = module.get<NutricionistaEspecialidadeService>(
      NutricionistaEspecialidadeService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

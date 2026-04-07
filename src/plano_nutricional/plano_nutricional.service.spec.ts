import { Test, TestingModule } from '@nestjs/testing';
import { PlanoNutricionalService } from './plano_nutricional.service';

describe('PlanoNutricionalService', () => {
  let service: PlanoNutricionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanoNutricionalService],
    }).compile();

    service = module.get<PlanoNutricionalService>(PlanoNutricionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

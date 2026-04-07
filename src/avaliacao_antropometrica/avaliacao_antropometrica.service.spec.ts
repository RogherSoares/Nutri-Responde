import { Test, TestingModule } from '@nestjs/testing';
import { AvaliacaoAntropometricaService } from './avaliacao_antropometrica.service';

describe('AvaliacaoAntropometricaService', () => {
  let service: AvaliacaoAntropometricaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvaliacaoAntropometricaService],
    }).compile();

    service = module.get<AvaliacaoAntropometricaService>(
      AvaliacaoAntropometricaService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

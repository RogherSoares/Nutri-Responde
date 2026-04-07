import { Test, TestingModule } from '@nestjs/testing';
import { AvaliacaoAntropometricaController } from './avaliacao_antropometrica.controller';
import { AvaliacaoAntropometricaService } from './avaliacao_antropometrica.service';

describe('AvaliacaoAntropometricaController', () => {
  let controller: AvaliacaoAntropometricaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaliacaoAntropometricaController],
      providers: [AvaliacaoAntropometricaService],
    }).compile();

    controller = module.get<AvaliacaoAntropometricaController>(
      AvaliacaoAntropometricaController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { AvaliacaoAntropometricaController } from './avaliacao_antropometrica.controller';
import { AvaliacaoAntropometricaService } from './avaliacao_antropometrica.service';
import { beforeEach, describe, it } from 'node:test';

describe('AvaliacaoAntropometricaController', () => {
  let controller: AvaliacaoAntropometricaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AvaliacaoAntropometricaController],
      providers: [
        {
          provide: AvaliacaoAntropometricaService,
          useValue: {},
        },
        {
          provide: JwtService,
          useValue: {
            verifyAsync: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AvaliacaoAntropometricaController>(
      AvaliacaoAntropometricaController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

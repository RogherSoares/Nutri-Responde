import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { RespostaController } from './resposta.controller';
import { RespostaService } from './resposta.service';
import { beforeEach, describe, it } from 'node:test';

describe('RespostaController', () => {
  let controller: RespostaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RespostaController],
      providers: [
        {
          provide: RespostaService,
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

    controller = module.get<RespostaController>(RespostaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { DuvidaController } from './duvida.controller';
import { DuvidaService } from './duvida.service';
import { beforeEach, describe, it } from 'node:test';

describe('DuvidaController', () => {
  let controller: DuvidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuvidaController],
      providers: [
        {
          provide: DuvidaService,
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

    controller = module.get<DuvidaController>(DuvidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

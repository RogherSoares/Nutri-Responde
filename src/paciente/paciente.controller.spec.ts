import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { PacienteController } from './paciente.controller';
import { PacienteService } from './paciente.service';
import { beforeEach, describe, it } from 'node:test';

describe('PacienteController', () => {
  let controller: PacienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PacienteController],
      providers: [
        {
          provide: PacienteService,
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

    controller = module.get<PacienteController>(PacienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

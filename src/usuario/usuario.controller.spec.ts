import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { beforeEach, describe, it } from 'node:test';

describe('UsuarioController', () => {
  let controller: UsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsuarioController],
      providers: [
        {
          provide: UsuarioService,
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

    controller = module.get<UsuarioController>(UsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

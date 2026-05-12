import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { NutricionistaPerfilController } from './nutricionista_perfil.controller';
import { NutricionistaPerfilService } from './nutricionista_perfil.service';
import { beforeEach, describe, it } from 'node:test';

describe('NutricionistaPerfilController', () => {
  let controller: NutricionistaPerfilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutricionistaPerfilController],
      providers: [
        {
          provide: NutricionistaPerfilService,
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

    controller = module.get<NutricionistaPerfilController>(
      NutricionistaPerfilController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

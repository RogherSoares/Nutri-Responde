import { Test, TestingModule } from '@nestjs/testing';
import { NutricionistaPerfilController } from './nutricionista_perfil.controller';
import { NutricionistaPerfilService } from './nutricionista_perfil.service';

describe('NutricionistaPerfilController', () => {
  let controller: NutricionistaPerfilController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutricionistaPerfilController],
      providers: [NutricionistaPerfilService],
    }).compile();

    controller = module.get<NutricionistaPerfilController>(
      NutricionistaPerfilController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

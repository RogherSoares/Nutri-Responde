import { Test, TestingModule } from '@nestjs/testing';
import { NutricionistaEspecialidadeController } from './nutricionista_especialidade.controller';
import { NutricionistaEspecialidadeService } from './nutricionista_especialidade.service';

describe('NutricionistaEspecialidadeController', () => {
  let controller: NutricionistaEspecialidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutricionistaEspecialidadeController],
      providers: [NutricionistaEspecialidadeService],
    }).compile();

    controller = module.get<NutricionistaEspecialidadeController>(
      NutricionistaEspecialidadeController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

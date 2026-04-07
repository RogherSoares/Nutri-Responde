import { Test, TestingModule } from '@nestjs/testing';
import { PlanoNutricionalController } from './plano_nutricional.controller';
import { PlanoNutricionalService } from './plano_nutricional.service';

describe('PlanoNutricionalController', () => {
  let controller: PlanoNutricionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanoNutricionalController],
      providers: [PlanoNutricionalService],
    }).compile();

    controller = module.get<PlanoNutricionalController>(
      PlanoNutricionalController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

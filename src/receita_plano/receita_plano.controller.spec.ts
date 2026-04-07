import { Test, TestingModule } from '@nestjs/testing';
import { ReceitaPlanoController } from './receita_plano.controller';
import { ReceitaPlanoService } from './receita_plano.service';

describe('ReceitaPlanoController', () => {
  let controller: ReceitaPlanoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceitaPlanoController],
      providers: [ReceitaPlanoService],
    }).compile();

    controller = module.get<ReceitaPlanoController>(ReceitaPlanoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

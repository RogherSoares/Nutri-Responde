import { Test, TestingModule } from '@nestjs/testing';
import { DuvidaController } from './duvida.controller';
import { DuvidaService } from './duvida.service';

describe('DuvidaController', () => {
  let controller: DuvidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuvidaController],
      providers: [DuvidaService],
    }).compile();

    controller = module.get<DuvidaController>(DuvidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

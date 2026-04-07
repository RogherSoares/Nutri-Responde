import { Test, TestingModule } from '@nestjs/testing';
import { ReceitaPlanoService } from './receita_plano.service';

describe('ReceitaPlanoService', () => {
  let service: ReceitaPlanoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceitaPlanoService],
    }).compile();

    service = module.get<ReceitaPlanoService>(ReceitaPlanoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

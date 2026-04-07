import { Test, TestingModule } from '@nestjs/testing';
import { DuvidaService } from './duvida.service';

describe('DuvidaService', () => {
  let service: DuvidaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuvidaService],
    }).compile();

    service = module.get<DuvidaService>(DuvidaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

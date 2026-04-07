import { Test, TestingModule } from '@nestjs/testing';
import { NutricionistaPerfilService } from './nutricionista_perfil.service';

describe('NutricionistaPerfilService', () => {
  let service: NutricionistaPerfilService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutricionistaPerfilService],
    }).compile();

    service = module.get<NutricionistaPerfilService>(
      NutricionistaPerfilService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { AvaliacaoAntropometricaService } from './avaliacao_antropometrica.service';
import { AvaliacaoAntropometricaController } from './avaliacao_antropometrica.controller';

@Module({
  controllers: [AvaliacaoAntropometricaController],
  providers: [AvaliacaoAntropometricaService],
})
export class AvaliacaoAntropometricaModule {}

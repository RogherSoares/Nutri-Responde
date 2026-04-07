import { Module } from '@nestjs/common';
import { PlanoNutricionalService } from './plano_nutricional.service';
import { PlanoNutricionalController } from './plano_nutricional.controller';

@Module({
  controllers: [PlanoNutricionalController],
  providers: [PlanoNutricionalService],
})
export class PlanoNutricionalModule {}

import { Module } from '@nestjs/common';
import { ReceitaPlanoService } from './receita_plano.service';
import { ReceitaPlanoController } from './receita_plano.controller';

@Module({
  controllers: [ReceitaPlanoController],
  providers: [ReceitaPlanoService],
})
export class ReceitaPlanoModule {}

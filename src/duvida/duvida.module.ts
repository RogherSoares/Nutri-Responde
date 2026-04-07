import { Module } from '@nestjs/common';
import { DuvidaService } from './duvida.service';
import { DuvidaController } from './duvida.controller';

@Module({
  controllers: [DuvidaController],
  providers: [DuvidaService],
})
export class DuvidaModule {}

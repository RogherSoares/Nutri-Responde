import { Module } from '@nestjs/common';
import { NutricionistaPerfilService } from './nutricionista_perfil.service';
import { NutricionistaPerfilController } from './nutricionista_perfil.controller';

@Module({
  controllers: [NutricionistaPerfilController],
  providers: [NutricionistaPerfilService],
})
export class NutricionistaPerfilModule {}

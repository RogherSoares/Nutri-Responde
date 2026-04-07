import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AvaliacaoAntropometricaService } from './avaliacao_antropometrica.service';
import { CreateAvaliacaoAntropometricaDto } from './dto/create-avaliacao_antropometrica.dto';
import { UpdateAvaliacaoAntropometricaDto } from './dto/update-avaliacao_antropometrica.dto';

@Controller('avaliacao-antropometrica')
export class AvaliacaoAntropometricaController {
  constructor(
    private readonly avaliacaoAntropometricaService: AvaliacaoAntropometricaService,
  ) {}

  @Post()
  create(
    @Body() createAvaliacaoAntropometricaDto: CreateAvaliacaoAntropometricaDto,
  ) {
    return this.avaliacaoAntropometricaService.create(
      createAvaliacaoAntropometricaDto,
    );
  }

  @Get()
  findAll() {
    return this.avaliacaoAntropometricaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacaoAntropometricaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAvaliacaoAntropometricaDto: UpdateAvaliacaoAntropometricaDto,
  ) {
    return this.avaliacaoAntropometricaService.update(
      +id,
      updateAvaliacaoAntropometricaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacaoAntropometricaService.remove(+id);
  }
}

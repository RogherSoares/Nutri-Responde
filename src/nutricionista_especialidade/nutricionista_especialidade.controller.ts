import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NutricionistaEspecialidadeService } from './nutricionista_especialidade.service';
import { CreateNutricionistaEspecialidadeDto } from './dto/create-nutricionista_especialidade.dto';
import { UpdateNutricionistaEspecialidadeDto } from './dto/update-nutricionista_especialidade.dto';

@Controller('nutricionista-especialidade')
export class NutricionistaEspecialidadeController {
  constructor(
    private readonly nutricionistaEspecialidadeService: NutricionistaEspecialidadeService,
  ) {}

  @Post()
  create(
    @Body()
    createNutricionistaEspecialidadeDto: CreateNutricionistaEspecialidadeDto,
  ) {
    return this.nutricionistaEspecialidadeService.create(
      createNutricionistaEspecialidadeDto,
    );
  }

  @Get()
  findAll() {
    return this.nutricionistaEspecialidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nutricionistaEspecialidadeService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateNutricionistaEspecialidadeDto: UpdateNutricionistaEspecialidadeDto,
  ) {
    return this.nutricionistaEspecialidadeService.update(
      +id,
      updateNutricionistaEspecialidadeDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nutricionistaEspecialidadeService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NutricionistaPerfilService } from './nutricionista_perfil.service';
import { CreateNutricionistaPerfilDto } from './dto/create-nutricionista_perfil.dto';
import { UpdateNutricionistaPerfilDto } from './dto/update-nutricionista_perfil.dto';

@Controller('nutricionista-perfil')
export class NutricionistaPerfilController {
  constructor(
    private readonly nutricionistaPerfilService: NutricionistaPerfilService,
  ) {}

  @Post()
  create(@Body() createNutricionistaPerfilDto: CreateNutricionistaPerfilDto) {
    return this.nutricionistaPerfilService.create(createNutricionistaPerfilDto);
  }

  @Get()
  findAll() {
    return this.nutricionistaPerfilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nutricionistaPerfilService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNutricionistaPerfilDto: UpdateNutricionistaPerfilDto,
  ) {
    return this.nutricionistaPerfilService.update(
      +id,
      updateNutricionistaPerfilDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nutricionistaPerfilService.remove(+id);
  }
}

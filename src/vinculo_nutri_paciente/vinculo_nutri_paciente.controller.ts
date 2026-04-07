import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VinculoNutriPacienteService } from './vinculo_nutri_paciente.service';
import { CreateVinculoNutriPacienteDto } from './dto/create-vinculo_nutri_paciente.dto';
import { UpdateVinculoNutriPacienteDto } from './dto/update-vinculo_nutri_paciente.dto';

@Controller('vinculo-nutri-paciente')
export class VinculoNutriPacienteController {
  constructor(
    private readonly vinculoNutriPacienteService: VinculoNutriPacienteService,
  ) {}

  @Post()
  create(@Body() createVinculoNutriPacienteDto: CreateVinculoNutriPacienteDto) {
    return this.vinculoNutriPacienteService.create(
      createVinculoNutriPacienteDto,
    );
  }

  @Get()
  findAll() {
    return this.vinculoNutriPacienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vinculoNutriPacienteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVinculoNutriPacienteDto: UpdateVinculoNutriPacienteDto,
  ) {
    return this.vinculoNutriPacienteService.update(
      +id,
      updateVinculoNutriPacienteDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vinculoNutriPacienteService.remove(+id);
  }
}

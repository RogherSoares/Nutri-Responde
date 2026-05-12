import {
  ApiBody,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
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

@ApiTags('Vinculo Nutri Paciente')
@Controller('vinculo-nutri-paciente')
export class VinculoNutriPacienteController {
  constructor(
    private readonly vinculoNutriPacienteService: VinculoNutriPacienteService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar vinculo entre nutricionista e paciente' })
  @ApiCreatedResponse({ description: 'Vinculo criado com sucesso.' })
  create(@Body() createVinculoNutriPacienteDto: CreateVinculoNutriPacienteDto) {
    return this.vinculoNutriPacienteService.create(
      createVinculoNutriPacienteDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Listar vinculos nutri-paciente' })
  @ApiOkResponse({ description: 'Lista de vinculos retornada.' })
  findAll() {
    return this.vinculoNutriPacienteService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar vinculo por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do vinculo' })
  @ApiOkResponse({ description: 'Vinculo encontrado.' })
  findOne(@Param('id') id: string) {
    return this.vinculoNutriPacienteService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar vinculo por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do vinculo' })
  @ApiBody({
    type: UpdateVinculoNutriPacienteDto,
    description: 'Campos opcionais para atualizar o vinculo nutri-paciente.',
  })
  @ApiOkResponse({ description: 'Vinculo atualizado com sucesso.' })
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
  @ApiOperation({ summary: 'Remover vinculo por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do vinculo' })
  @ApiNoContentResponse({ description: 'Vinculo removido com sucesso.' })
  remove(@Param('id') id: string) {
    return this.vinculoNutriPacienteService.remove(+id);
  }
}

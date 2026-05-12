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
import { PlanoNutricionalService } from './plano_nutricional.service';
import { CreatePlanoNutricionalDto } from './dto/create-plano_nutricional.dto';
import { UpdatePlanoNutricionalDto } from './dto/update-plano_nutricional.dto';

@ApiTags('Plano Nutricional')
@Controller('plano-nutricional')
export class PlanoNutricionalController {
  constructor(
    private readonly planoNutricionalService: PlanoNutricionalService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Criar plano nutricional' })
  @ApiCreatedResponse({ description: 'Plano nutricional criado com sucesso.' })
  create(@Body() createPlanoNutricionalDto: CreatePlanoNutricionalDto) {
    return this.planoNutricionalService.create(createPlanoNutricionalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar planos nutricionais' })
  @ApiOkResponse({ description: 'Lista de planos retornada.' })
  findAll() {
    return this.planoNutricionalService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar plano nutricional por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do plano' })
  @ApiOkResponse({ description: 'Plano encontrado.' })
  findOne(@Param('id') id: string) {
    return this.planoNutricionalService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar plano nutricional por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do plano' })
  @ApiBody({
    type: UpdatePlanoNutricionalDto,
    description: 'Campos opcionais para atualizar o plano nutricional.',
  })
  @ApiOkResponse({ description: 'Plano atualizado com sucesso.' })
  update(
    @Param('id') id: string,
    @Body() updatePlanoNutricionalDto: UpdatePlanoNutricionalDto,
  ) {
    return this.planoNutricionalService.update(+id, updatePlanoNutricionalDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover plano nutricional por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do plano' })
  @ApiNoContentResponse({ description: 'Plano removido com sucesso.' })
  remove(@Param('id') id: string) {
    return this.planoNutricionalService.remove(+id);
  }
}

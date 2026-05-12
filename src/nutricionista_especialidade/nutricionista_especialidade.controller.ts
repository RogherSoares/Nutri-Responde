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
import { NutricionistaEspecialidadeService } from './nutricionista_especialidade.service';
import { CreateNutricionistaEspecialidadeDto } from './dto/create-nutricionista_especialidade.dto';
import { UpdateNutricionistaEspecialidadeDto } from './dto/update-nutricionista_especialidade.dto';

@ApiTags('Nutricionista Especialidade')
@Controller('nutricionista-especialidade')
export class NutricionistaEspecialidadeController {
  constructor(
    private readonly nutricionistaEspecialidadeService: NutricionistaEspecialidadeService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Vincular nutricionista a especialidade' })
  @ApiCreatedResponse({ description: 'Vinculo criado com sucesso.' })
  create(
    @Body()
    createNutricionistaEspecialidadeDto: CreateNutricionistaEspecialidadeDto,
  ) {
    return this.nutricionistaEspecialidadeService.create(
      createNutricionistaEspecialidadeDto,
    );
  }

  @Get()
  @ApiOperation({ summary: 'Listar vinculos de especialidades' })
  @ApiOkResponse({ description: 'Lista de vinculos retornada.' })
  findAll() {
    return this.nutricionistaEspecialidadeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar vinculo por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do vinculo' })
  @ApiOkResponse({ description: 'Vinculo encontrado.' })
  findOne(@Param('id') id: string) {
    return this.nutricionistaEspecialidadeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar vinculo por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do vinculo' })
  @ApiBody({
    type: UpdateNutricionistaEspecialidadeDto,
    description: 'Campos opcionais para atualizar o vinculo de especialidade.',
  })
  @ApiOkResponse({ description: 'Vinculo atualizado com sucesso.' })
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
  @ApiOperation({ summary: 'Remover vinculo por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do vinculo' })
  @ApiNoContentResponse({ description: 'Vinculo removido com sucesso.' })
  remove(@Param('id') id: string) {
    return this.nutricionistaEspecialidadeService.remove(+id);
  }
}

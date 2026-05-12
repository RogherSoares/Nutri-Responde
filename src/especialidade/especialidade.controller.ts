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
import { EspecialidadeService } from './especialidade.service';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';

@ApiTags('Especialidade')
@Controller('especialidade')
export class EspecialidadeController {
  constructor(private readonly especialidadeService: EspecialidadeService) {}

  @Post()
  @ApiOperation({ summary: 'Criar especialidade' })
  @ApiCreatedResponse({ description: 'Especialidade criada com sucesso.' })
  create(@Body() createEspecialidadeDto: CreateEspecialidadeDto) {
    return this.especialidadeService.create(createEspecialidadeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar especialidades' })
  @ApiOkResponse({ description: 'Lista de especialidades retornada.' })
  findAll() {
    return this.especialidadeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar especialidade por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da especialidade' })
  @ApiOkResponse({ description: 'Especialidade encontrada.' })
  findOne(@Param('id') id: string) {
    return this.especialidadeService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar especialidade por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da especialidade' })
  @ApiBody({
    type: UpdateEspecialidadeDto,
    description: 'Campos opcionais para atualizar a especialidade.',
  })
  @ApiOkResponse({ description: 'Especialidade atualizada com sucesso.' })
  update(
    @Param('id') id: string,
    @Body() updateEspecialidadeDto: UpdateEspecialidadeDto,
  ) {
    return this.especialidadeService.update(+id, updateEspecialidadeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover especialidade por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da especialidade' })
  @ApiNoContentResponse({ description: 'Especialidade removida com sucesso.' })
  remove(@Param('id') id: string) {
    return this.especialidadeService.remove(+id);
  }
}

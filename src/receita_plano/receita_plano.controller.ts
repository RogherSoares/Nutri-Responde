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
import { ReceitaPlanoService } from './receita_plano.service';
import { CreateReceitaPlanoDto } from './dto/create-receita_plano.dto';
import { UpdateReceitaPlanoDto } from './dto/update-receita_plano.dto';

@ApiTags('Receita Plano')
@Controller('receita-plano')
export class ReceitaPlanoController {
  constructor(private readonly receitaPlanoService: ReceitaPlanoService) {}

  @Post()
  @ApiOperation({ summary: 'Criar refeicao do plano' })
  @ApiCreatedResponse({ description: 'Refeicao criada com sucesso.' })
  create(@Body() createReceitaPlanoDto: CreateReceitaPlanoDto) {
    return this.receitaPlanoService.create(createReceitaPlanoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar refeicoes do plano' })
  @ApiOkResponse({ description: 'Lista de refeicoes retornada.' })
  findAll() {
    return this.receitaPlanoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar refeicao por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da refeicao' })
  @ApiOkResponse({ description: 'Refeicao encontrada.' })
  findOne(@Param('id') id: string) {
    return this.receitaPlanoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar refeicao por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da refeicao' })
  @ApiBody({
    type: UpdateReceitaPlanoDto,
    description: 'Campos opcionais para atualizar a refeicao do plano.',
  })
  @ApiOkResponse({ description: 'Refeicao atualizada com sucesso.' })
  update(
    @Param('id') id: string,
    @Body() updateReceitaPlanoDto: UpdateReceitaPlanoDto,
  ) {
    return this.receitaPlanoService.update(+id, updateReceitaPlanoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover refeicao por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da refeicao' })
  @ApiNoContentResponse({ description: 'Refeicao removida com sucesso.' })
  remove(@Param('id') id: string) {
    return this.receitaPlanoService.remove(+id);
  }
}

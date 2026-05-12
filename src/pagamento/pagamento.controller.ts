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
import { PagamentoService } from './pagamento.service';
import { CreatePagamentoDto } from './dto/create-pagamento.dto';
import { UpdatePagamentoDto } from './dto/update-pagamento.dto';

@ApiTags('Pagamento')
@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar pagamento' })
  @ApiCreatedResponse({ description: 'Pagamento criado com sucesso.' })
  create(@Body() createPagamentoDto: CreatePagamentoDto) {
    return this.pagamentoService.create(createPagamentoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar pagamentos' })
  @ApiOkResponse({ description: 'Lista de pagamentos retornada.' })
  findAll() {
    return this.pagamentoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar pagamento por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do pagamento' })
  @ApiOkResponse({ description: 'Pagamento encontrado.' })
  findOne(@Param('id') id: string) {
    return this.pagamentoService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar pagamento por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do pagamento' })
  @ApiBody({
    type: UpdatePagamentoDto,
    description: 'Campos opcionais para atualizar o pagamento.',
  })
  @ApiOkResponse({ description: 'Pagamento atualizado com sucesso.' })
  update(
    @Param('id') id: string,
    @Body() updatePagamentoDto: UpdatePagamentoDto,
  ) {
    return this.pagamentoService.update(+id, updatePagamentoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover pagamento por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do pagamento' })
  @ApiNoContentResponse({ description: 'Pagamento removido com sucesso.' })
  remove(@Param('id') id: string) {
    return this.pagamentoService.remove(+id);
  }
}

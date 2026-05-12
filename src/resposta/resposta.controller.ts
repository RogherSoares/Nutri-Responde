import {
  ApiBody,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthUserGuard } from '../auth/auth-user.guard';
import { RoleGuard } from '../auth/role.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';
import { RespostaService } from './resposta.service';
import { CreateRespostaDto } from './dto/create-resposta.dto';
import { UpdateRespostaDto } from './dto/update-resposta.dto';

@UseGuards(AuthUserGuard, RoleGuard)
@ApiTags('Resposta')
@ApiBearerAuth()
@Controller('resposta')
export class RespostaController {
  constructor(private readonly respostaService: RespostaService) {}

  @Post()
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Criar resposta' })
  @ApiCreatedResponse({ description: 'Resposta criada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  create(@Body() createRespostaDto: CreateRespostaDto) {
    return this.respostaService.create(createRespostaDto);
  }

  @Get()
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Listar respostas' })
  @ApiOkResponse({ description: 'Lista de respostas retornada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  findAll() {
    return this.respostaService.findAll();
  }

  @Get(':id')
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Buscar resposta por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da resposta' })
  @ApiOkResponse({ description: 'Resposta encontrada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  findOne(@Param('id') id: string) {
    return this.respostaService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Atualizar resposta por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da resposta' })
  @ApiBody({
    type: UpdateRespostaDto,
    description: 'Campos opcionais para atualizar a resposta.',
  })
  @ApiOkResponse({ description: 'Resposta atualizada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  update(
    @Param('id') id: string,
    @Body() updateRespostaDto: UpdateRespostaDto,
  ) {
    return this.respostaService.update(+id, updateRespostaDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Remover resposta por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da resposta' })
  @ApiNoContentResponse({ description: 'Resposta removida com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  remove(@Param('id') id: string) {
    return this.respostaService.remove(+id);
  }
}

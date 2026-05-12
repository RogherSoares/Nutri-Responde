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
import { DuvidaService } from './duvida.service';
import { CreateDuvidaDto } from './dto/create-duvida.dto';
import { UpdateDuvidaDto } from './dto/update-duvida.dto';

@UseGuards(AuthUserGuard, RoleGuard)
@ApiTags('Duvida')
@ApiBearerAuth()
@Controller('duvida')
export class DuvidaController {
  constructor(private readonly duvidaService: DuvidaService) {}

  @Post()
  @Roles(Role.PACIENTE, Role.ADMIN)
  @ApiOperation({ summary: 'Criar duvida' })
  @ApiCreatedResponse({ description: 'Duvida criada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  create(@Body() createDuvidaDto: CreateDuvidaDto) {
    return this.duvidaService.create(createDuvidaDto);
  }

  @Get()
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Listar duvidas' })
  @ApiOkResponse({ description: 'Lista de duvidas retornada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  findAll() {
    return this.duvidaService.findAll();
  }

  @Get(':id')
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Buscar duvida por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da duvida' })
  @ApiOkResponse({ description: 'Duvida encontrada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  findOne(@Param('id') id: string) {
    return this.duvidaService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Atualizar duvida por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da duvida' })
  @ApiBody({
    type: UpdateDuvidaDto,
    description: 'Campos opcionais para atualizar a duvida.',
  })
  @ApiOkResponse({ description: 'Duvida atualizada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  update(@Param('id') id: string, @Body() updateDuvidaDto: UpdateDuvidaDto) {
    return this.duvidaService.update(+id, updateDuvidaDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Remover duvida por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da duvida' })
  @ApiNoContentResponse({ description: 'Duvida removida com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  remove(@Param('id') id: string) {
    return this.duvidaService.remove(+id);
  }
}

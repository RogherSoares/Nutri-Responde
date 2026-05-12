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
import { NutricionistaPerfilService } from './nutricionista_perfil.service';
import { CreateNutricionistaPerfilDto } from './dto/create-nutricionista_perfil.dto';
import { UpdateNutricionistaPerfilDto } from './dto/update-nutricionista_perfil.dto';

@UseGuards(AuthUserGuard, RoleGuard)
@ApiTags('Nutricionista Perfil')
@ApiBearerAuth()
@Controller('nutricionista-perfil')
export class NutricionistaPerfilController {
  constructor(
    private readonly nutricionistaPerfilService: NutricionistaPerfilService,
  ) {}

  @Post()
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Criar perfil de nutricionista' })
  @ApiCreatedResponse({ description: 'Perfil criado com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  create(@Body() createNutricionistaPerfilDto: CreateNutricionistaPerfilDto) {
    return this.nutricionistaPerfilService.create(createNutricionistaPerfilDto);
  }

  @Get()
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Listar perfis de nutricionistas' })
  @ApiOkResponse({ description: 'Lista de perfis retornada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  findAll() {
    return this.nutricionistaPerfilService.findAll();
  }

  @Get(':id')
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Buscar perfil por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do perfil' })
  @ApiOkResponse({ description: 'Perfil encontrado com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  findOne(@Param('id') id: string) {
    return this.nutricionistaPerfilService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Atualizar perfil por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do perfil' })
  @ApiBody({
    type: UpdateNutricionistaPerfilDto,
    description: 'Campos opcionais para atualizar o perfil do nutricionista.',
  })
  @ApiOkResponse({ description: 'Perfil atualizado com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
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
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Remover perfil por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do perfil' })
  @ApiNoContentResponse({ description: 'Perfil removido com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  remove(@Param('id') id: string) {
    return this.nutricionistaPerfilService.remove(+id);
  }
}

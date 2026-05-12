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
import { AvaliacaoAntropometricaService } from './avaliacao_antropometrica.service';
import { CreateAvaliacaoAntropometricaDto } from './dto/create-avaliacao_antropometrica.dto';
import { UpdateAvaliacaoAntropometricaDto } from './dto/update-avaliacao_antropometrica.dto';

@UseGuards(AuthUserGuard, RoleGuard)
@ApiTags('Avaliacao Antropometrica')
@ApiBearerAuth()
@Controller('avaliacao-antropometrica')
export class AvaliacaoAntropometricaController {
  constructor(
    private readonly avaliacaoAntropometricaService: AvaliacaoAntropometricaService,
  ) {}

  @Post()
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Criar avaliacao antropometrica' })
  @ApiCreatedResponse({ description: 'Avaliacao criada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  create(
    @Body() createAvaliacaoAntropometricaDto: CreateAvaliacaoAntropometricaDto,
  ) {
    return this.avaliacaoAntropometricaService.create(
      createAvaliacaoAntropometricaDto,
    );
  }

  @Get()
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Listar avaliacoes antropometricas' })
  @ApiOkResponse({ description: 'Lista de avaliacoes retornada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  findAll() {
    return this.avaliacaoAntropometricaService.findAll();
  }

  @Get(':id')
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Buscar avaliacao por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da avaliacao' })
  @ApiOkResponse({ description: 'Avaliacao encontrada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  findOne(@Param('id') id: string) {
    return this.avaliacaoAntropometricaService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Atualizar avaliacao por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da avaliacao' })
  @ApiBody({
    type: UpdateAvaliacaoAntropometricaDto,
    description: 'Campos opcionais para atualizar a avaliacao.',
  })
  @ApiOkResponse({ description: 'Avaliacao atualizada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  update(
    @Param('id') id: string,
    @Body() updateAvaliacaoAntropometricaDto: UpdateAvaliacaoAntropometricaDto,
  ) {
    return this.avaliacaoAntropometricaService.update(
      +id,
      updateAvaliacaoAntropometricaDto,
    );
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Remover avaliacao por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico da avaliacao' })
  @ApiNoContentResponse({ description: 'Avaliacao removida com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  remove(@Param('id') id: string) {
    return this.avaliacaoAntropometricaService.remove(+id);
  }
}

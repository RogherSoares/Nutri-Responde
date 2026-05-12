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
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@UseGuards(AuthUserGuard, RoleGuard)
@ApiTags('Paciente')
@ApiBearerAuth()
@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  @Roles(Role.PACIENTE, Role.ADMIN)
  @ApiOperation({ summary: 'Criar paciente' })
  @ApiCreatedResponse({ description: 'Paciente criado com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @Get()
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Listar pacientes' })
  @ApiOkResponse({ description: 'Lista de pacientes retornada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  @ApiOperation({ summary: 'Buscar paciente por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do paciente' })
  @ApiOkResponse({ description: 'Paciente encontrado com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  findOne(@Param('id') id: string) {
    return this.pacienteService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.PACIENTE, Role.ADMIN)
  @ApiOperation({ summary: 'Atualizar paciente por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do paciente' })
  @ApiBody({
    type: UpdatePacienteDto,
    description: 'Campos opcionais para atualizar o paciente.',
  })
  @ApiOkResponse({ description: 'Paciente atualizado com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  update(
    @Param('id') id: string,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    return this.pacienteService.update(+id, updatePacienteDto);
  }

  @Delete(':id')
  @Roles(Role.PACIENTE, Role.ADMIN)
  @ApiOperation({ summary: 'Remover paciente por ID' })
  @ApiParam({ name: 'id', description: 'ID numerico do paciente' })
  @ApiNoContentResponse({ description: 'Paciente removido com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  remove(@Param('id') id: string) {
    return this.pacienteService.remove(+id);
  }
}

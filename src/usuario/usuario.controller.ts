import {
  ApiBody,
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
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
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@UseGuards(AuthUserGuard, RoleGuard)
@Roles(Role.ADMIN)
@ApiTags('Usuario')
@ApiBearerAuth()
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @ApiOperation({ summary: 'Criar usuario' })
  @ApiCreatedResponse({ description: 'Usuario criado com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  async create(@Body() createUsuarioDto: CreateUsuarioDto) {
    const usuario = await this.usuarioService.create(createUsuarioDto);

    return this.usuarioService.toSafeUser(usuario);
  }

  @Get()
  @ApiOperation({ summary: 'Listar usuarios' })
  @ApiOkResponse({ description: 'Lista de usuarios retornada com sucesso.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar usuario por ID' })
  @ApiParam({ name: 'id', description: 'ID do usuario (UUID)' })
  @ApiOkResponse({ description: 'Usuario encontrado com sucesso.' })
  @ApiNotFoundResponse({ description: 'Usuario nao encontrado.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar usuario por ID' })
  @ApiParam({ name: 'id', description: 'ID do usuario (UUID)' })
  @ApiBody({
    type: UpdateUsuarioDto,
    description: 'Campos opcionais para atualizar o usuario.',
  })
  @ApiOkResponse({ description: 'Usuario atualizado com sucesso.' })
  @ApiNotFoundResponse({ description: 'Usuario nao encontrado.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioService.update(id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover usuario por ID' })
  @ApiParam({ name: 'id', description: 'ID do usuario (UUID)' })
  @ApiNoContentResponse({ description: 'Usuario removido com sucesso.' })
  @ApiNotFoundResponse({ description: 'Usuario nao encontrado.' })
  @ApiUnauthorizedResponse({ description: 'Nao autenticado.' })
  @ApiForbiddenResponse({ description: 'Sem permissao para a rota.' })
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }
}

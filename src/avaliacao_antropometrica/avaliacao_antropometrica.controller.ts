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
@Controller('avaliacao-antropometrica')
export class AvaliacaoAntropometricaController {
  constructor(
    private readonly avaliacaoAntropometricaService: AvaliacaoAntropometricaService,
  ) {}

  @Post()
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  create(
    @Body() createAvaliacaoAntropometricaDto: CreateAvaliacaoAntropometricaDto,
  ) {
    return this.avaliacaoAntropometricaService.create(
      createAvaliacaoAntropometricaDto,
    );
  }

  @Get()
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  findAll() {
    return this.avaliacaoAntropometricaService.findAll();
  }

  @Get(':id')
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  findOne(@Param('id') id: string) {
    return this.avaliacaoAntropometricaService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
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
  remove(@Param('id') id: string) {
    return this.avaliacaoAntropometricaService.remove(+id);
  }
}

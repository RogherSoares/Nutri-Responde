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
@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  @Roles(Role.PACIENTE, Role.ADMIN)
  create(@Body() createPacienteDto: CreatePacienteDto) {
    return this.pacienteService.create(createPacienteDto);
  }

  @Get()
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id')
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  findOne(@Param('id') id: string) {
    return this.pacienteService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.PACIENTE, Role.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    return this.pacienteService.update(+id, updatePacienteDto);
  }

  @Delete(':id')
  @Roles(Role.PACIENTE, Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.pacienteService.remove(+id);
  }
}

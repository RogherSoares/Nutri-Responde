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
@Controller('duvida')
export class DuvidaController {
  constructor(private readonly duvidaService: DuvidaService) {}

  @Post()
  @Roles(Role.PACIENTE, Role.ADMIN)
  create(@Body() createDuvidaDto: CreateDuvidaDto) {
    return this.duvidaService.create(createDuvidaDto);
  }

  @Get()
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  findAll() {
    return this.duvidaService.findAll();
  }

  @Get(':id')
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  findOne(@Param('id') id: string) {
    return this.duvidaService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() updateDuvidaDto: UpdateDuvidaDto) {
    return this.duvidaService.update(+id, updateDuvidaDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.duvidaService.remove(+id);
  }
}

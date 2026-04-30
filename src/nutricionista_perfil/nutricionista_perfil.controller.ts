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
@Controller('nutricionista-perfil')
export class NutricionistaPerfilController {
  constructor(
    private readonly nutricionistaPerfilService: NutricionistaPerfilService,
  ) {}

  @Post()
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  create(@Body() createNutricionistaPerfilDto: CreateNutricionistaPerfilDto) {
    return this.nutricionistaPerfilService.create(createNutricionistaPerfilDto);
  }

  @Get()
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  findAll() {
    return this.nutricionistaPerfilService.findAll();
  }

  @Get(':id')
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  findOne(@Param('id') id: string) {
    return this.nutricionistaPerfilService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
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
  remove(@Param('id') id: string) {
    return this.nutricionistaPerfilService.remove(+id);
  }
}

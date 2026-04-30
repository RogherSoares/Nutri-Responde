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
@Controller('resposta')
export class RespostaController {
  constructor(private readonly respostaService: RespostaService) {}

  @Post()
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  create(@Body() createRespostaDto: CreateRespostaDto) {
    return this.respostaService.create(createRespostaDto);
  }

  @Get()
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  findAll() {
    return this.respostaService.findAll();
  }

  @Get(':id')
  @Roles(Role.PACIENTE, Role.NUTRICIONISTA, Role.ADMIN)
  findOne(@Param('id') id: string) {
    return this.respostaService.findOne(+id);
  }

  @Patch(':id')
  @Roles(Role.NUTRICIONISTA, Role.ADMIN)
  update(
    @Param('id') id: string,
    @Body() updateRespostaDto: UpdateRespostaDto,
  ) {
    return this.respostaService.update(+id, updateRespostaDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.respostaService.remove(+id);
  }
}

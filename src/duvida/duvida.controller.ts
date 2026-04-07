import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DuvidaService } from './duvida.service';
import { CreateDuvidaDto } from './dto/create-duvida.dto';
import { UpdateDuvidaDto } from './dto/update-duvida.dto';

@Controller('duvida')
export class DuvidaController {
  constructor(private readonly duvidaService: DuvidaService) {}

  @Post()
  create(@Body() createDuvidaDto: CreateDuvidaDto) {
    return this.duvidaService.create(createDuvidaDto);
  }

  @Get()
  findAll() {
    return this.duvidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.duvidaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDuvidaDto: UpdateDuvidaDto) {
    return this.duvidaService.update(+id, updateDuvidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.duvidaService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlanoNutricionalService } from './plano_nutricional.service';
import { CreatePlanoNutricionalDto } from './dto/create-plano_nutricional.dto';
import { UpdatePlanoNutricionalDto } from './dto/update-plano_nutricional.dto';

@Controller('plano-nutricional')
export class PlanoNutricionalController {
  constructor(
    private readonly planoNutricionalService: PlanoNutricionalService,
  ) {}

  @Post()
  create(@Body() createPlanoNutricionalDto: CreatePlanoNutricionalDto) {
    return this.planoNutricionalService.create(createPlanoNutricionalDto);
  }

  @Get()
  findAll() {
    return this.planoNutricionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planoNutricionalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlanoNutricionalDto: UpdatePlanoNutricionalDto,
  ) {
    return this.planoNutricionalService.update(+id, updatePlanoNutricionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planoNutricionalService.remove(+id);
  }
}

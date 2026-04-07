import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReceitaPlanoService } from './receita_plano.service';
import { CreateReceitaPlanoDto } from './dto/create-receita_plano.dto';
import { UpdateReceitaPlanoDto } from './dto/update-receita_plano.dto';

@Controller('receita-plano')
export class ReceitaPlanoController {
  constructor(private readonly receitaPlanoService: ReceitaPlanoService) {}

  @Post()
  create(@Body() createReceitaPlanoDto: CreateReceitaPlanoDto) {
    return this.receitaPlanoService.create(createReceitaPlanoDto);
  }

  @Get()
  findAll() {
    return this.receitaPlanoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.receitaPlanoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReceitaPlanoDto: UpdateReceitaPlanoDto,
  ) {
    return this.receitaPlanoService.update(+id, updateReceitaPlanoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.receitaPlanoService.remove(+id);
  }
}

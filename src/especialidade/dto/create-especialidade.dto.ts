import { ApiProperty } from '@nestjs/swagger';

export class CreateEspecialidadeDto {
  @ApiProperty({
    example: 'Nutricao esportiva',
    description: 'Nome unico da especialidade',
  })
  nome!: string;
}

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateReceitaPlanoDto {
  @ApiProperty({
    example: '44a7083f-5fdc-47db-a54d-9faf53f96f2f',
    description: 'ID do plano nutricional',
  })
  plano_id!: string;

  @ApiProperty({
    example: 'Cafe da manha',
    description: 'Nome da refeicao',
  })
  nome!: string;

  @ApiPropertyOptional({
    example: '07:30',
    description: 'Horario sugerido da refeicao',
  })
  horario?: string;

  @ApiPropertyOptional({
    example: '2 ovos mexidos, 1 fatia de pao integral, 1 fruta',
    description: 'Itens da refeicao prescrita',
  })
  itens?: string;
}

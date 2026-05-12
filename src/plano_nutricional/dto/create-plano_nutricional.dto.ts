import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePlanoNutricionalDto {
  @ApiProperty({
    example: '9b0d6182-a3b8-4f7c-96fd-8f18cb0f0f7f',
    description: 'ID do paciente do plano',
  })
  paciente_id!: string;

  @ApiProperty({
    example: '2f8db970-bdb2-40e6-a520-6fca2ccfbe1f',
    description: 'ID do nutricionista responsavel pelo plano',
  })
  nutricionista_id!: string;

  @ApiPropertyOptional({
    example: 'Perder 3kg em 60 dias',
    description: 'Metas do plano nutricional',
  })
  metas?: string;

  @ApiPropertyOptional({
    example: 'Aumentar ingestao de fibras e agua.',
    description: 'Observacoes gerais do plano',
  })
  observacoes?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Indica se o plano esta vigente',
  })
  vigente?: boolean;
}

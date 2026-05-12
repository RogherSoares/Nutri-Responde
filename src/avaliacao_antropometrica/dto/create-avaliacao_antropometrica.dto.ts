import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAvaliacaoAntropometricaDto {
  @ApiProperty({
    example: '9b0d6182-a3b8-4f7c-96fd-8f18cb0f0f7f',
    description: 'ID do paciente avaliado',
  })
  paciente_id!: string;

  @ApiProperty({
    example: '2f8db970-bdb2-40e6-a520-6fca2ccfbe1f',
    description: 'ID do nutricionista responsavel pela avaliacao',
  })
  nutricionista_id!: string;

  @ApiProperty({
    example: 72.5,
    description: 'Peso atual em quilogramas',
  })
  peso_kg!: number;

  @ApiProperty({
    example: 1.72,
    description: 'Altura em metros',
  })
  altura_m!: number;

  @ApiPropertyOptional({
    example: 24.5,
    description: 'IMC calculado no momento da avaliacao',
  })
  imc?: number;

  @ApiPropertyOptional({
    example: 88,
    description: 'Circunferencia abdominal em centimetros',
  })
  circ_abdominal_cm?: number;

  @ApiPropertyOptional({
    example: 'Evolucao positiva na adesao ao plano alimentar.',
    description: 'Observacoes adicionais da avaliacao',
  })
  observacoes?: string;

  @ApiProperty({
    example: '2026-05-11',
    description: 'Data da avaliacao no formato YYYY-MM-DD',
  })
  data!: string;
}

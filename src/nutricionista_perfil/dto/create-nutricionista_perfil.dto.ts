import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateNutricionistaPerfilDto {
  @ApiProperty({
    example: '8a28cb0f-e7d6-4e5a-b7b8-5d4ca1e6fd55',
    description: 'ID do usuario associado ao perfil do nutricionista',
  })
  usuario_id!: string;

  @ApiPropertyOptional({
    example: '12345',
    description: 'Numero de registro no CRN',
  })
  crn?: string;

  @ApiPropertyOptional({
    example: 'Especialista em emagrecimento e hipertrofia.',
    description: 'Biografia profissional do nutricionista',
  })
  bio?: string;

  @ApiPropertyOptional({
    example: 250,
    description: 'Valor da consulta em reais',
  })
  valor_consulta?: number;

  @ApiPropertyOptional({
    example: 'Rua das Flores, 100',
    description: 'Endereco de atendimento',
  })
  endereco?: string;

  @ApiPropertyOptional({
    example: 'Sao Paulo',
    description: 'Cidade de atendimento',
  })
  cidade?: string;

  @ApiPropertyOptional({
    example: -23.5505,
    description: 'Latitude do local de atendimento',
  })
  latitude?: number;

  @ApiPropertyOptional({
    example: -46.6333,
    description: 'Longitude do local de atendimento',
  })
  longitude?: number;
}

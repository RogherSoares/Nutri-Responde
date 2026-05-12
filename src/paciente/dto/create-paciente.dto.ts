import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePacienteDto {
  @ApiProperty({
    example: '8a28cb0f-e7d6-4e5a-b7b8-5d4ca1e6fd55',
    description: 'ID do usuario associado ao paciente',
  })
  usuario_id!: string;

  @ApiPropertyOptional({
    example: '1998-07-15',
    description: 'Data de nascimento no formato YYYY-MM-DD',
  })
  data_nascimento?: string;

  @ApiPropertyOptional({
    example: 'Intolerancia a lactose',
    description: 'Restricoes alimentares do paciente',
  })
  restricoes?: string;

  @ApiPropertyOptional({
    example: 'Alergia a amendoim',
    description: 'Alergias informadas pelo paciente',
  })
  alergias?: string;

  @ApiPropertyOptional({
    example: 'Reducao de gordura corporal',
    description: 'Objetivo nutricional principal do paciente',
  })
  objetivo?: string;
}

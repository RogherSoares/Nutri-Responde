import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVinculoNutriPacienteDto {
  @ApiProperty({
    example: '2f8db970-bdb2-40e6-a520-6fca2ccfbe1f',
    description: 'ID do perfil do nutricionista',
  })
  nutricionista_perfil_id!: string;

  @ApiProperty({
    example: '9b0d6182-a3b8-4f7c-96fd-8f18cb0f0f7f',
    description: 'ID do paciente vinculado',
  })
  paciente_id!: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Indica se o paciente consentiu com o vinculo',
  })
  consentimento?: boolean;
}

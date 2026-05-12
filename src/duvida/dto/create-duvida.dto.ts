import { ApiProperty } from '@nestjs/swagger';

export class CreateDuvidaDto {
  @ApiProperty({
    example: '9b0d6182-a3b8-4f7c-96fd-8f18cb0f0f7f',
    description: 'ID do paciente que abriu a duvida',
  })
  cliente_id!: string;

  @ApiProperty({
    example: '2f8db970-bdb2-40e6-a520-6fca2ccfbe1f',
    description: 'ID do nutricionista que recebera a duvida',
  })
  nutricionista_id!: string;

  @ApiProperty({
    example: 'Qual melhor horario para consumir carboidrato?',
    description: 'Titulo resumido da duvida',
  })
  titulo!: string;

  @ApiProperty({
    example: 'Tenho treino as 19h e gostaria de ajustar meu jantar.',
    description: 'Descricao detalhada da duvida',
  })
  descricao!: string;

  @ApiProperty({
    example: 'aberta',
    description: 'Status atual da duvida',
  })
  status!: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateRespostaDto {
  @ApiProperty({
    example: '34b8f841-4f8e-4bdb-8cf2-e908063f9f8e',
    description: 'ID da duvida que esta sendo respondida',
  })
  duvida_id!: string;

  @ApiProperty({
    example: '2f8db970-bdb2-40e6-a520-6fca2ccfbe1f',
    description: 'ID do nutricionista que respondeu',
  })
  nutricionista_id!: string;

  @ApiProperty({
    example: 'Inclua uma fonte de carboidrato complexo no pre-treino.',
    description: 'Conteudo da resposta do nutricionista',
  })
  conteudo!: string;
}

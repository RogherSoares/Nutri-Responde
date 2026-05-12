import { ApiProperty } from '@nestjs/swagger';

export class CreateNutricionistaEspecialidadeDto {
  @ApiProperty({
    example: '2f8db970-bdb2-40e6-a520-6fca2ccfbe1f',
    description: 'ID do perfil do nutricionista',
  })
  nutricionista_perfil_id!: string;

  @ApiProperty({
    example: 'fdb4cb45-e579-4297-8926-a95f9793d5f3',
    description: 'ID da especialidade vinculada',
  })
  especialidade_id!: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreatePagamentoDto {
  @ApiProperty({
    example: '2f8db970-bdb2-40e6-a520-6fca2ccfbe1f',
    description: 'ID do nutricionista que recebe o pagamento',
  })
  nutricionista_id!: string;

  @ApiProperty({
    example: '9b0d6182-a3b8-4f7c-96fd-8f18cb0f0f7f',
    description: 'ID do paciente pagador',
  })
  paciente_id!: string;

  @ApiProperty({
    example: 180,
    description: 'Valor do pagamento em reais',
  })
  valor!: number;

  @ApiProperty({
    example: 'pix',
    description: 'Metodo de pagamento utilizado',
  })
  metodo!: string;

  @ApiProperty({
    example: 'pago',
    description: 'Status do pagamento',
  })
  status!: string;

  @ApiProperty({
    example: '2026-05-11',
    description: 'Data do pagamento no formato YYYY-MM-DD',
  })
  data!: string;
}

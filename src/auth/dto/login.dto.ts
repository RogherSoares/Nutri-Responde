import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'maria@nutri-responde.local',
    description: 'Email do usuario cadastrado',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: '123456',
    description: 'Senha em texto puro para autenticacao',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  senha!: string;
}

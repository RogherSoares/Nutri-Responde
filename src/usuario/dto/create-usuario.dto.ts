import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Role } from '../../auth/roles.enum';

export class CreateUsuarioDto {
  @ApiProperty({
    example: 'Maria Souza',
    description: 'Nome completo do usuario',
    minLength: 2,
  })
  @IsString()
  @MinLength(2)
  nome!: string;

  @ApiProperty({
    example: 'maria@nutri-responde.local',
    description: 'Email unico do usuario',
  })
  @IsEmail()
  email!: string;

  @ApiProperty({
    example: '123456',
    description: 'Senha do usuario para login',
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  senha!: string;

  @ApiProperty({
    enum: Role,
    example: Role.PACIENTE,
    description: 'Tipo de perfil de acesso do usuario',
  })
  @IsEnum(Role)
  tipo!: Role;

  @ApiPropertyOptional({
    example: '11988887777',
    description: 'Telefone para contato do usuario',
  })
  @IsOptional()
  @IsString()
  telefone?: string;
}

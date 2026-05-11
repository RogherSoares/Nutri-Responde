import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthUserGuard } from './auth-user.guard';
import { RoleGuard } from './role.guard';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'nutri-responde-dev-secret',
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([Usuario]),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthUserGuard, RoleGuard],
  exports: [AuthService, AuthUserGuard, RoleGuard, JwtModule],
})
export class AuthModule {}

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { RequestUser } from './request-user.type';

type RequestWithUser = Request & { user?: RequestUser };

@Injectable()
export class AuthUserGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const token = this.getBearerToken(request);

    if (!token) {
      request.user = undefined;
      return true;
    }

    try {
      const payload = await this.jwtService.verifyAsync<
        
          RequestUser & {
         
         sub?: string;
        }
      >(token);

      request.user = {
        id: payload.id ?? payload.sub ?? '',
        nome: payload.nome,
        email: payload.email,
        tipo: payload.tipo,
        roles: payload.roles ?? [payload.tipo],
      };

      return true;
    } catch {
      throw new UnauthorizedException('Invalid or expired access token');
    }
  }

  private getBearerToken(request: Request): string | undefined {
    const authorization = request.headers.authorization;

    if (!authorization || Array.isArray(authorization)) {
      return undefined;
    }

    const [scheme, token] = authorization.split(' ');

    if (!scheme || scheme.toLowerCase() !== 'bearer' || !token) {
      return undefined;
    }

    return token;
    return undefined;
  }
}

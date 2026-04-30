import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { ROLES_KEY } from './roles.decorator';
import { RequestUser } from './request-user.type';
import { Role } from './roles.enum';

type RequestWithUser = Request & { user?: RequestUser };

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestWithUser>();
    const user = request.user;

    if (!user) {
      throw new UnauthorizedException('User not authenticated');
    }

    const userRoles = new Set<Role>(
      [user.tipo, ...(user.roles ?? [])].filter(Boolean),
    );
    const hasAllowedRole = requiredRoles.some((role) => userRoles.has(role));

    if (!hasAllowedRole) {
      throw new ForbiddenException(
        'User does not have permission for this route',
      );
    }

    return true;
  }
}

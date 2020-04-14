import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {

    constructor(
        private reflector: Reflector,
    ) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const ctrlRoles = this.reflector.get<string[]>('roles', context.getClass());
        const pointRoles = this.reflector.get<string[]>('roles', context.getHandler());
        const req = context.switchToHttp().getRequest();
        if (pointRoles && pointRoles.includes(req.user.role.role)) {
            return true;
        }
        if (ctrlRoles && ctrlRoles.includes(req.user.role.role)) {
            return true;
        }
        return false;
    }
}

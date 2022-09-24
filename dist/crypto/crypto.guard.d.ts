import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class ServerGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
export declare class ClientGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}

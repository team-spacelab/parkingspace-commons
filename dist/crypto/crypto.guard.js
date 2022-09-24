"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGuard = exports.ServerGuard = void 0;
const common_1 = require("@nestjs/common");
let ServerGuard = class ServerGuard {
    canActivate(context) {
        const response = context.switchToHttp().getResponse();
        if (!response.locals.isVerfiedServer) {
            throw new common_1.ForbiddenException('SERVER_NOT_VERIFIED');
        }
        return true;
    }
};
ServerGuard = __decorate([
    (0, common_1.Injectable)()
], ServerGuard);
exports.ServerGuard = ServerGuard;
let ClientGuard = class ClientGuard {
    canActivate(context) {
        const response = context.switchToHttp().getResponse();
        if (response.locals.userId === undefined) {
            throw new common_1.UnauthorizedException('CLIENT_NOT_LOGINED');
        }
        return true;
    }
};
ClientGuard = __decorate([
    (0, common_1.Injectable)()
], ClientGuard);
exports.ClientGuard = ClientGuard;
//# sourceMappingURL=crypto.guard.js.map
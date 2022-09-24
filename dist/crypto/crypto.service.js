"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const jsonwebtoken_1 = require("jsonwebtoken");
const entity_1 = require("../entity");
const sha_js_1 = __importDefault(require("sha.js"));
let CryptoService = class CryptoService {
    constructor(jwtService, configService) {
        this.jwtService = jwtService;
        this.SERVER_TOKEN = configService.get('SERVER_TOKEN', 'youshallnotpass');
    }
    generateClientToken(user) {
        if ([entity_1.UserStatus.BLOCKED, entity_1.UserStatus.DELETED].includes(user.status)) {
            throw new common_1.ForbiddenException('USER_STATUS_NOT_ALLOWED_TO_GENERATE_CLIENT_TOKEN');
        }
        return this.jwtService.sign({ sub: user.id });
    }
    verifyClientToken(token) {
        try {
            const payload = this.jwtService.verify(token);
            if (typeof (payload === null || payload === void 0 ? void 0 : payload.sub) !== 'number') {
                throw new common_1.NotAcceptableException('TOKEN_MALFORMED');
            }
            return payload.sub;
        }
        catch (e) {
            if (e instanceof jsonwebtoken_1.JsonWebTokenError) {
                throw new common_1.NotAcceptableException('TOKEN_MALFORMED');
            }
            if (e instanceof jsonwebtoken_1.TokenExpiredError) {
                throw new common_1.UnauthorizedException('TOKEN_EXPIRED');
            }
            throw new common_1.InternalServerErrorException('JWT_SERVICE_ERROR');
        }
    }
    verifyServerToken(token) {
        return token === this.SERVER_TOKEN;
    }
    verifyUserPassword(password, user) {
        const hashedPassword = (0, sha_js_1.default)('sha512')
            .update(user.salt + password)
            .digest('hex');
        return hashedPassword === user.password;
    }
    generateSalt() {
        return new Array(4)
            .fill(1)
            .map(() => String.fromCharCode(Math.floor(Math.random() * 11139) + 44032))
            .join('');
    }
    hashUserPassword(password, salt) {
        return (0, sha_js_1.default)('sha512').update(salt + password).digest('hex');
    }
};
CryptoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService, config_1.ConfigService])
], CryptoService);
exports.CryptoService = CryptoService;
//# sourceMappingURL=crypto.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const crypto_service_1 = require("./crypto.service");
let CryptoModule = class CryptoModule {
};
CryptoModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    secret: config.get('SESSION_SECRET', 'youshallnotpass'),
                    signOptions: {
                        expiresIn: '30 days',
                        algorithm: 'HS512',
                        issuer: 'AuthServer@ParkingSpace'
                    },
                    verifyOptions: {
                        algorithms: ['HS512'],
                        issuer: 'AuthServer@ParkingSpace'
                    }
                })
            }),
            config_1.ConfigModule
        ],
        providers: [crypto_service_1.CryptoService],
        exports: [crypto_service_1.CryptoService]
    })
], CryptoModule);
exports.CryptoModule = CryptoModule;
//# sourceMappingURL=crypto.module.js.map
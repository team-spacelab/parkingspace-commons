import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Users } from '../entity';
export declare class CryptoService {
    private readonly jwtService;
    private readonly SERVER_TOKEN;
    constructor(jwtService: JwtService, configService: ConfigService);
    generateClientToken(user: Users): string;
    verifyClientToken(token: string): number;
    verifyServerToken(token: string): boolean;
    verifyUserPassword(password: string, user: Users): boolean;
    generateSalt(): string;
    hashUserPassword(password: string, salt: string): string;
}

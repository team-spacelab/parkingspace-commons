import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { CryptoService } from './crypto.service';
export declare class ResolveTokenMiddleware implements NestMiddleware {
    private readonly cryptoService;
    constructor(cryptoService: CryptoService);
    use(req: Request, res: Response, next: NextFunction): void;
}

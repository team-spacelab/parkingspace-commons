"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCommons = void 0;
const common_1 = require("@nestjs/common");
const morgan_1 = __importDefault(require("morgan"));
const exception_filter_1 = require("./exception.filter");
const logger_service_1 = require("./logger.service");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
function setupCommons(app, serverName) {
    app.useLogger(app.get(logger_service_1.Logger));
    app.useGlobalFilters(new exception_filter_1.HttpExceptionFilter());
    app.setGlobalPrefix(`api/${serverName}`);
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: '1'
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        always: true,
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        exceptionFactory: (errors) => new common_1.BadRequestException('VALIDATION_FAILED: ' +
            errors
                .map((v) => Object.values(v.constraints))
                .flat().join('\n'))
    }));
    app.use((0, cookie_parser_1.default)());
    app.use((0, morgan_1.default)((tokens, req, res) => JSON.stringify({
        type: 'ACCESS_LOG',
        method: tokens.method(req, res),
        path: tokens.url(req, res),
        return: tokens.status(req, res),
        userAgent: tokens['user-agent'](req, res),
        time: tokens['response-time'](req, res),
        date: tokens.date(req, res, 'iso'),
        locals: res.locals
    })));
}
exports.setupCommons = setupCommons;
//# sourceMappingURL=setupCommons.js.map
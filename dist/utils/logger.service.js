"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    log(message, ...optionalParams) {
        if (process.env.DEBUG === undefined)
            return;
        console.log(JSON.stringify({
            type: 'NESTJS_LOG',
            message,
            extra: optionalParams,
            date: new Date()
        }));
    }
    error(message, ...optionalParams) {
        console.log(JSON.stringify({
            type: 'ERROR_LOG',
            message,
            extra: optionalParams,
            date: new Date()
        }));
    }
    warn(message, ...optionalParams) {
        console.log(JSON.stringify({
            type: 'WARNING_LOG',
            message,
            extra: optionalParams,
            date: new Date()
        }));
    }
    debug(message, ...optionalParams) {
        if (process.env.DEBUG === undefined)
            return;
        console.log(JSON.stringify({
            type: 'NESTJS_DEBUG_LOG',
            message,
            extra: optionalParams,
            date: new Date()
        }));
    }
    verbose(message, ...optionalParams) {
        if (process.env.DEBUG === undefined)
            return;
        console.log(JSON.stringify({
            type: 'NESTJS_VERBOSE_LOG',
            message,
            extra: optionalParams,
            date: new Date()
        }));
    }
    app(message, ...optionalParams) {
        console.log(JSON.stringify({
            type: 'APP_LOG',
            message,
            extra: optionalParams,
            date: new Date()
        }));
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.service.js.map
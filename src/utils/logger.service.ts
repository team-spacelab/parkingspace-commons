import { LoggerService } from '@nestjs/common'

export class Logger implements LoggerService {
  log (message: any, ...optionalParams: any[]) {
    if (process.env.DEBUG === undefined) return
    console.log(JSON.stringify({
      type: 'NESTJS_LOG',
      message,
      extra: optionalParams,
      date: new Date()
    }))
  }

  error (message: any, ...optionalParams: any[]) {
    console.log(JSON.stringify({
      type: 'ERROR_LOG',
      message,
      extra: optionalParams,
      date: new Date()
    }))
  }

  warn (message: any, ...optionalParams: any[]) {
    console.log(JSON.stringify({
      type: 'WARNING_LOG',
      message,
      extra: optionalParams,
      date: new Date()
    }))
  }

  debug? (message: any, ...optionalParams: any[]) {
    if (process.env.DEBUG === undefined) return
    console.log(JSON.stringify({
      type: 'NESTJS_DEBUG_LOG',
      message,
      extra: optionalParams,
      date: new Date()
    }))
  }

  verbose? (message: any, ...optionalParams: any[]) {
    if (process.env.DEBUG === undefined) return
    console.log(JSON.stringify({
      type: 'NESTJS_VERBOSE_LOG',
      message,
      extra: optionalParams,
      date: new Date()
    }))
  }

  app (message: any, ...optionalParams: any[]) {
    console.log(JSON.stringify({
      type: 'APP_LOG',
      message,
      extra: optionalParams,
      date: new Date()
    }))
  }
}

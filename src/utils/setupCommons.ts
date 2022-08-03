import { BadRequestException, INestApplication, ValidationPipe, VersioningType } from '@nestjs/common'
import { Response } from 'express'
import morgan from 'morgan'
import { HttpExceptionFilter } from './exception.filter'
import { Logger } from './logger.service'

export function setupCommons (app: INestApplication, serverName: string) {
  app.useLogger(app.get(Logger))

  app.useGlobalFilters(new HttpExceptionFilter())
  app.setGlobalPrefix(`api/${serverName}`)
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1'
  })

  app.useGlobalPipes(new ValidationPipe({
    always: true,
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
    exceptionFactory: (errors) =>
      new BadRequestException(
        'VALIDATION_FAILED: ' +
        errors
          .map((v) => Object.values(v.constraints))
          .flat().join('\n'))
  }))

  app.use(morgan((tokens, req, res) =>
    JSON.stringify({
      type: 'ACCESS_LOG',
      method: tokens.method(req, res),
      path: tokens.url(req, res),
      return: tokens.status(req, res),
      userAgent: tokens['user-agent'](req, res),
      time: tokens['response-time'](req, res),
      date: tokens.date(req, res, 'iso'),
      locals: (res as Response).locals
    })))
}

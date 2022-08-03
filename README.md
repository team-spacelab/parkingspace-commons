# ParkingSpace NestJS Common Components
## how to use
1. install this module:
```
pnpm i github:team-spacelab/parkingspace-commons#pkg
```
2. apply this code to `main.ts`:
```ts
import { setupCommons } from 'parkingspace-commons'

async function bootstrap () {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  })

  setupCommons(app, 'auth') // server name, like `/api/"auth"/v1/@me`
  
  // ...

  await app.listen(3000)
}

bootstrap()
```
3. apply this code to `app.module.ts`:
```ts
@Module({
  imports: [
    ConfigModule.forRoot(),
    // ...
    HealthModule,
    CryptoModule,
    LoggerModule
  ]
})
export class AppModule implements NestModule {
  public configure (consumer: MiddlewareConsumer) {
    consumer
      .apply(ResolveTokenMiddleware)
      .forRoutes('/')
  }
}
```
4. create `.env` file and enter:
```env
DATABASE_HOST=
DATABASE_USER=
DATABASE_PASSWD=
DATABASE_SCHEMA=
SESSION_SECRET=
```
5. profit!

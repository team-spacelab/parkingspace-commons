# ParkingSpace NestJS Common Components
## how to use
1. install this module
2. apply this code to `main.ts`:
```ts
import { setupCommons } from '~~~/utils'

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
3. profit!

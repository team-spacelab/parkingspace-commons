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
3. profit!

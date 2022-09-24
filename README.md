# ParkingSpace NestJS Common Components
ParkingSpace의 NestJS 백엔드 서버들이 공통적으로 사용하는 것들을 모아둔 모듈입니다.

## how to install
모듈을 설치합니다:
```
pnpm i github:team-spacelab/parkingspace-commons#pkg
```
설치하고 나면 `import { ... } from 'parkingspace-commons` 로 접근할 수 있습니다.

## components
> ### :warning: 주의!
> `app.module.ts`에 다음과 같이 설정되있지 않으면 실행도 안되며 로그도 찍히지 않습니다!
> ```ts
> import { LoggerModule } from 'parkingspace-commons'
> 
> @Module({
>   imports: [
>     LoggerModule
>     // ...
>   ]
> })
> // ...
> ```

### `setupCommons`
여러가지 것들을 자동으로 설정해 줍니다.

1. JSON 로거 설정
2. 버저닝 추가 (경로에 v1 붙혀주는거)
3. 글로벌 프리픽스 (경로를 `/api/서버명/v1`으로 해줌)
4. `ValidationPipe` 설정
5. `cookieParser` 설정

```ts
// main.ts

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { setupCommons } from 'parkingspace-commons'

async function bootstrap () {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  })

  setupCommons(app, 'auth')

  await app.listen(3000)
}

bootstrap()
```

주의: `bufferLog`를 `true`로 안하면 로거가 로딩되기 전에 NestJS로그가 발생해 안이쁨ㅠ

### `DBConfigService`
`.env`파일을 읽고 DB를 연결해줍니다.

```ts
// app.module.ts

import { DBConfigService } from 'parkingspace-commons'
import { ConfigModule, ConfigService } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: DBConfigService
    }),
    // ...
  ]
})
// ...
```

### `HealthModule`
`{"success": true}` 를 응답하는 `/api/서버명/v1/health` 엔드포인트를 만듭니다

### `CryptoModule`
사용자 인증 관련 모듈

#### `ResolveTokenMiddleware`
쿠키와 헤더를 보고 값을 설정합니다.

`res.locals.userId` - 로그인이 되어있을 경우 유저 ID를 가져옴

```ts
// app.module.ts

import { CryptoModule, ResolveTokenMiddleware } from 'parkingspace-commons'
import { Module } from '@nestjs/common'

@Module({
  CryptoModule,
  // ...
})
export class AppModule implements NestModule {
  public configure (consumer: MiddlewareConsumer) {
    consumer
      .apply(ResolveTokenMiddleware)
      .forRoutes('/')
  }
}
```

#### `ServerGuard`
서버와 서버 간 통신에서 믿을만한 서버에서온 요청경우만 통과 (SESSION_TOKEN이 같은가?)

```ts
@UseGuard(ServerGuard)
@Post('...')
// ...
```

#### `ClientGuard`
로그인된 경우에만 통과

```ts
@UseGuard(ClientGuard)
@Get('@me')
// ...
```

#### `CryptoService`
아 ㅁㄹ 기능 졸라 많으니까 [걍 코드를 보삼ㅇㅇ](src/crypto/crypto.service.ts)

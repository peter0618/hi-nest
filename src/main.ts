import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ValidationPipe 를 이용하면, class-validator 에서 제공하는 decorator 를 사용할 수 있습니다.
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, // class 에 validation 이 명시되어 있지 않은 property 가 assign 되었을 때 에러로 처리합니다. (bad request)
      transform: true, // user 가 보낸 데이터의 타입을 서버가 원하는 타입으로 변환해 줍니다. (하지만.. primitive type 에 제대로 동작하지 않아서 ParseIntPipe 를 사용했습니댜.)
    }),
  );
  await app.listen(3000);
}
bootstrap();

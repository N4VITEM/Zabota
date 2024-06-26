import { NestFactory } from '@nestjs/core';
import { Application } from './Application.moule';

async function bootstrap() {
  const app = await NestFactory.create(Application);
  await app.listen(7070);
}
bootstrap();

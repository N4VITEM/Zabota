import { NestFactory } from '@nestjs/core';
import { Application } from './Application.moule';

async function bootstrap() {
  const app = await NestFactory.create(Application);
  app.enableCors({
    origin: 'http://localhost:3000', // Замените на домен вашего фронтенда
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
  });
  await app.listen(7070);
}
bootstrap();

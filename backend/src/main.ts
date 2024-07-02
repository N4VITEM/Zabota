import { NestFactory } from '@nestjs/core';
import { Application } from './Application.moule';
import * as fs from 'fs';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  if (process.env.LOCAL === 'false') {
    const httpsOptions = {
      key: fs.readFileSync('/etc/letsencrypt/live/zabota-web-service.ru/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/zabota-web-service.ru/fullchain.pem'),
    };

    const app = await NestFactory.create(Application, { httpsOptions });
    app.enableCors({
      origin: ['https://statistics.zabota-web-service.ru', 'https://bot.zabota-web-service.ru', 'https://form.zabota-web-service.ru'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      allowedHeaders: 'Content-Type, Accept',
    });
    console.log('сервер запускается удаленно')
    await app.listen(8000);
  }
  else {
    const app = await NestFactory.create(Application);
    app.enableCors({
      origin: ['http://localhost:3000', 'http://localhost:4000', 'http://localhost:7070'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      allowedHeaders: 'Content-Type, Accept',
    });
    console.log('сервер запускается локально')
    await app.listen(8000);
  }
}
bootstrap();

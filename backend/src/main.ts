import { NestFactory } from '@nestjs/core';
import { Application } from './Application.moule';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/zabota-web-service.ru/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/zabota-web-service.ru/fullchain.pem'),
  };

  const app = await NestFactory.create(Application, { httpsOptions });
  app.enableCors({
    origin: ['https://statistics.zabota-web-service.ru', 'https://bot.zabota-web-service.ru'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
  });
  await app.listen(8000);
}
bootstrap();

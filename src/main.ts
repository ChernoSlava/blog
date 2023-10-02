import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setBaseViewsDir(join(__dirname, '../src/views'));
  app.use(express.static('public'));

  app.setViewEngine('pug');

  app.use((req, res, next) => {
    if (req.originalUrl === '/favicon.ico') {
      res.status(204).end(); // Возвращаем пустой ответ
      return;
    }
    next();
  });

  await app.listen(3000);
}

bootstrap();

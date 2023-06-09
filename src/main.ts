import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'hbs';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  app.useStaticAssets(join(__dirname, '..', 'static'), {
    prefix: '/static/',
  });
  app.setBaseViewsDir(join(__dirname, '..', 'views/pages'));
  app.setViewEngine('hbs');

  hbs.registerPartials(join(__dirname, '..', 'views/partials'));

  await app.listen(3000);
}
bootstrap();

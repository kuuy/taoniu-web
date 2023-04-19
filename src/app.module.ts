import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptosModule } from './cryptos/cryptos.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [CryptosModule, ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

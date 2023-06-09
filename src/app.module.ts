import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CryptosModule } from './cryptos/cryptos.module';
import { ArticlesModule } from './articles/articles.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [CryptosModule, ArticlesModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

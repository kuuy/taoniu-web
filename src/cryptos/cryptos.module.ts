import { Module } from '@nestjs/common';
import { CryptosService } from './cryptos.service';
import { CryptosController } from './cryptos.controller';

@Module({
  providers: [CryptosService],
  controllers: [CryptosController]
})
export class CryptosModule {}

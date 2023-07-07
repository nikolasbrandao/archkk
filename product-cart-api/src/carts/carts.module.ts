import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({
    baseURL: 'http://localhost:3002',
    timeout: 5000,
    maxRedirects: 5,
  })],
  controllers: [CartsController],
  providers: [CartsService]
})
export class CartsModule {}

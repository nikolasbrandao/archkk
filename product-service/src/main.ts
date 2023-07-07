import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const SERVER_PORT = configService.get<string>('SERVER_PORT');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true}));
  
  await app.listen(SERVER_PORT || 3001);
}
bootstrap();

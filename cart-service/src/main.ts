import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Shopping Cart Service')
  .setDescription('Service to manage shopping cart in KK')
  .setVersion('1.0')
  .addTag('cart')
  .build();

  const configService = app.get(ConfigService);
  const SERVER_PORT = configService.get<string>('SERVER_PORT');
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(SERVER_PORT || 3002);
}
bootstrap();

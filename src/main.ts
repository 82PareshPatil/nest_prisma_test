import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Allow Angular to access API

  // 1. Create Swagger Config
  const config = new DocumentBuilder()
    .setTitle('NestJS Blog Backend')
    .setDescription('The DevBlog API description')
    .setVersion('1.0')
    .build();

  // 2. Setup Swagger Module
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Access at localhost:3000/api

  await app.listen(3000);
}
bootstrap();

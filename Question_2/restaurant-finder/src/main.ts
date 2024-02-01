import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  app.enableVersioning();
  app.useGlobalPipes(new ValidationPipe());
  let options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey
  }
  let swaggerConfig = new DocumentBuilder()
  .setTitle('IvoryPay - Restaurant Finder')
  .setDescription('API documentation for IvoryPay interview assessment')
  .setVersion('1.0.0')
  .build();
  let document = SwaggerModule.createDocument(app, swaggerConfig, options);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();

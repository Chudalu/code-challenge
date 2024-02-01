import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  let globalPrefix = 'api';
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1'
  });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(globalPrefix);
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

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('TodoList example')
    .setDescription('The TodoList API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://51.250.105.230',
      'https://51.250.105.230',
      'https://flash-tasks.vercel.app/',
      'https://vercel.app/',
    ],
  });

  await app.listen(80, () =>
    console.log(`🚀 server has been started at http://localhost:80`),
  );
}
bootstrap();

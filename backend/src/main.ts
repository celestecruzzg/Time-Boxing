import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ACTIVANDO SWAGGER
  const config = new DocumentBuilder()
    .setTitle('TimeBoxing')
    .setDescription('Aplicación que permite gestionar el tiempo de actividades')
    .setVersion('1.0')
    .addTag('timeboxing')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  // FIN DEL SWAGGER
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

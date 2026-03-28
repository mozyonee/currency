import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
	const logger = new Logger('Bootstrap');
	const app = await NestFactory.create(AppModule);

	app.enableCors();
	app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

	const port = process.env.PORT ?? 3001;
	await app.listen(port, '0.0.0.0', () => {
		logger.log(`Listening on ${port}`);
	});
}

bootstrap().catch((err) => {
	console.error('Bootstrap failed:', err);
	process.exit(1);
});

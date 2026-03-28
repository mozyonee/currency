import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CurrencyModule } from './currency/currency.module';
import { CurrencyService } from './currency/currency.service';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, envFilePath: ['.env.local', '.env'] }),
		CurrencyModule,
	],
	controllers: [],
	providers: [CurrencyService],
})
export class AppModule {}

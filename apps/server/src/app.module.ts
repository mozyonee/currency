import { Module } from '@nestjs/common';
import { CurrencyModule } from './currency/currency.module.js';

@Module({
	imports: [CurrencyModule],
	controllers: [],
	providers: [],
})
export class AppModule {}

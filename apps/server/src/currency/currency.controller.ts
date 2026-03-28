import { Body, Controller, Get, Post } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { ConvertDto } from './dto/convert.dto';

@Controller()
export class CurrencyController {
	constructor(private readonly currencyService: CurrencyService) {}

	@Get('currencies')
	getCurrencies(): Promise<string[]> {
		return this.currencyService.getCurrencies();
	}

	@Post('convert')
	async convert(@Body() body: ConvertDto): Promise<{ result: number }> {
		const { amount, from, to } = body;
		const result = await this.currencyService.convert(amount, from, to);
		return { result };
	}
}

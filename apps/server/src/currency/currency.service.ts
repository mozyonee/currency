import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';

const RATES_URL = 'https://open.er-api.com/v6/latest/USD';
const CACHE_TTL_MS = 3 * 60 * 60 * 1000;

interface RatesResponse {
	rates: Record<string, number>;
}

@Injectable()
export class CurrencyService {
	private readonly logger = new Logger(CurrencyService.name);

	private cachedRates: Record<string, number> | null = null;
	private cacheExpiresAt = 0;

	private async getRates(): Promise<Record<string, number>> {

		if (this.cachedRates && Date.now() < this.cacheExpiresAt) {
			this.logger.debug('Using cached exchange rates');
			return this.cachedRates;
		}

		const { data } = await axios.get<RatesResponse>(RATES_URL);
		this.cachedRates = data.rates;
		this.cacheExpiresAt = Date.now() + CACHE_TTL_MS;

		this.logger.debug('Fetched new exchange rates');

		return this.cachedRates;
	}

	async getCurrencies(): Promise<string[]> {
		const rates = await this.getRates();
		return Object.keys(rates);
	}

	async convert(amount: number, from: string, to: string): Promise<number> {
		const rates = await this.getRates();
		const inUsd = amount / rates[from];
		return inUsd * rates[to];
	}
}

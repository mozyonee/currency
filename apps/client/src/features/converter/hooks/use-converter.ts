'use client';

import api from '@/lib/api';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export function useConverter() {
	const [currencies, setCurrencies] = useState<string[]>([]);
	const [amount, setAmount] = useState<number>(1);
	const [from, setFrom] = useState<string>();
	const [to, setTo] = useState<string>();
	const [result, setResult] = useState<number>();

	const convert = useCallback(async () => {
		try {
			const { data } = await api.post('/convert', { amount, from, to });
			setResult(data);
		} catch {
			toast.error('Conversion failed. Please try again.');
		} finally { }
	}, [amount, from, to]);

	useEffect(() => {
		if (amount === 0) { setResult(0); return; }
		if (amount < 0 || !from || !to || from === to) return;
		setResult(undefined);

		// Debounce conversion to avoid excessive API calls
		const timer = setTimeout(convert, 500);
		return () => clearTimeout(timer);
	}, [amount, from, to, convert]);

	useEffect(() => {
		api.get('/currencies')
			.then(({ data }) => {
				setCurrencies(data);
				setFrom(data[0]);
				setTo(data[1]);
			})
			.catch(() => toast.error('Failed to load currencies'));
	}, []);

	return {
		setAmount: (value: string) => setAmount(Math.abs(Number(value)) || 0),
		setFrom,
		setTo,
		amount,
		from,
		to,
		currencies,
		result,
	};
}

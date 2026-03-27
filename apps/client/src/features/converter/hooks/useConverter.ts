'use client';

import api from '@/lib/api';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export function useConverter() {
	const [currencies, setCurrencies] = useState<string[]>([]);
	const [amount, setAmount] = useState<string>('');
	const [from, setFrom] = useState<string>('');
	const [to, setTo] = useState<string>('');
	const [result, setResult] = useState<number | null>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		api
			.get<string[]>('/currencies')
			.then(({ data }) => {
				setCurrencies(data);
				setFrom(data[0] ?? '');
				setTo(data[1] ?? '');
			})
			.catch(() => toast.error('Failed to load currencies'));
	}, []);

	async function convert() {
		const parsed = Number(amount);
		if (!amount || isNaN(parsed) || parsed <= 0) {
			toast.error('Amount must be a positive number');
			return;
		}
		if (!from || !to) {
			toast.error('Please select both currencies');
			return;
		}
		if (from === to) {
			toast.error('Source and target currencies must differ');
			return;
		}

		setLoading(true);
		try {
			const { data } = await api.post<{ result: number; }>('/convert', {
				amount: parsed,
				from,
				to,
			});
			setResult(data.result);
		} catch {
			toast.error('Conversion failed. Please try again.');
		} finally {
			setLoading(false);
		}
	}

	return {
		loading,
		setAmount, setFrom, setTo,
		amount, from, to,
		convert,
		currencies, result,
	};
}

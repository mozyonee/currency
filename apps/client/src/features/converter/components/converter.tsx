'use client';

import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import { useConverter } from '../hooks/use-converter';

export default function Converter() {
	const { amount, from, to, setAmount, setFrom, setTo, currencies, result } = useConverter();

	return (
		<div className="flex flex-col items-stretch gap-2">
			<Input label="Amount" placeholder="Amount" type="number" value={amount.toString()} onChange={setAmount} />

			<Select label="From" value={from} options={currencies} onChange={setFrom} />
			<Select label="To" value={to} options={currencies} onChange={setTo} />

			<p className="text-lg font-medium">
				{result === undefined ? 'Converting...' : `${amount} ${from} = ${result.toFixed(2)} ${to}`}
			</p>
		</div>
	);
}

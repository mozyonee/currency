'use client';

import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Select from '@/components/ui/select';
import { useConverter } from '../hooks/use-converter';

export default function Converter() {
	const { amount, from, to, setAmount, setFrom, setTo, loading, convert, currencies, result } = useConverter();

	return (
		<div className="flex flex-col items-stretch gap-2">
			<Input
				label="Amount"
				placeholder="Amount"
				type="number"
				value={amount.toString()}
				onChange={setAmount}
			/>

			<Select label="From" value={from} options={currencies} onChange={setFrom} />
			<Select label="To" value={to} options={currencies} onChange={setTo} />

			<Button onClick={convert} disabled={loading || !amount} style="mt-4">
				{loading ? 'Converting...' : 'Convert'}
			</Button>

			{result && <p className="text-lg font-medium">
				{amount} {from} = {result.toFixed(4)} {to}
			</p>}
		</div>
	);
}

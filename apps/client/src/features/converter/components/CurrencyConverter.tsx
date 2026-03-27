'use client';

import { useConverter } from '../hooks/useConverter';
import ConvertResult from './ConvertResult';
import CurrencySelect from './CurrencySelect';

export default function CurrencyConverter() {
	const {
		amount, from, to,
		setAmount, setFrom, setTo,
		loading,
		convert,
		currencies, result
	} = useConverter();

	return (
		<div className="flex flex-col gap-4 w-full max-w-sm">
			<input
				type="number"
				value={amount}
				onChange={(e) => setAmount(e.target.value)}
				placeholder="Amount"
				className="border border-zinc-300 rounded px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
			/>
			<CurrencySelect value={from} currencies={currencies} onChange={setFrom} />
			<CurrencySelect value={to} currencies={currencies} onChange={setTo} />
			<button
				onClick={convert}
				disabled={loading || !amount}
				className="rounded bg-zinc-900 px-4 py-2 text-white hover:bg-zinc-700 disabled:opacity-50 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
			>
				{loading ? 'Converting…' : 'Convert'}
			</button>
			{result !== null && (
				<ConvertResult amount={amount} from={from} to={to} result={result} />
			)}
		</div>
	);
}

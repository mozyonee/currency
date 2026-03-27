interface CurrencySelectProps {
	value: string;
	currencies: string[];
	onChange: (value: string) => void;
}

export default function CurrencySelect({ value, currencies, onChange }: CurrencySelectProps) {
	return (
		<select
			value={value}
			onChange={(e) => onChange(e.target.value)}
			className="border border-zinc-300 rounded px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
		>
			{currencies.map((c) => (
				<option key={c} value={c}>
					{c}
				</option>
			))}
		</select>
	);
}

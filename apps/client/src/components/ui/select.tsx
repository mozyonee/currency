import { SelectHTMLAttributes } from 'react';

interface Props extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
	label?: string;
	value?: string;
	options: string[];
	onChange: (value: string) => void;
}

export default function Select({ value, options, label, onChange, ...rest }: Props) {
	return (
		<label className="flex flex-col gap-1">
			{label && <span className="text-sm text-zinc-400">{label}</span>}
			<select
				value={value}
				className="border rounded px-3 py-2 border-zinc-700 bg-zinc-900"
				onChange={(e) => onChange(e.target.value)}
				{...rest}
			>
				{options.map((c) => (
					<option key={c} value={c}>
						{c}
					</option>
				))}
			</select>
		</label>
	);
}

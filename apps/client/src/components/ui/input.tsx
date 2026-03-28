import { InputHTMLAttributes } from 'react';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	label?: string;
	onChange: (value: string) => void;
}

export default function Input({ label, onChange, ...rest }: Props) {
	return (
		<label className="flex flex-col gap-1">
			{label && <span className="text-sm text-zinc-400">{label}</span>}
			<input
				className="border rounded px-3 py-2 border-zinc-700 bg-zinc-900"
				onChange={(e) => onChange?.(e.target.value)}
				{...rest}
			/>
		</label>
	);
}

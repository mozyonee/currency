import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	onClick: () => void;
	disabled?: boolean;
	style?: string;
}

export default function Button({ onClick, disabled, children, style = "", ...rest }: Props) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`rounded px-4 py-2 disabled:opacity-50 bg-zinc-100 text-black hover:bg-zinc-300 ${style}`}
			{...rest}
		>
			{children}
		</button>
	);
}

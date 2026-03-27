interface ConvertResultProps {
	amount: string;
	from: string;
	to: string;
	result: number;
}

export default function ConvertResult({ amount, from, to, result }: ConvertResultProps) {
	return (
		<p className="text-lg font-medium">
			{amount} {from} = {result.toFixed(4)} {to}
		</p>
	);
}

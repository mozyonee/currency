import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Override default ignores of eslint-config-next.
	{
		rules: {
			'react-hooks/exhaustive-deps': ['warn', { additionalHooks: 'useDebounce' }],
		},
	},
	{
		files: ['src/hooks/use-debounce.ts'],
		rules: {
			'react-hooks/use-memo': 'off',
			'react-hooks/exhaustive-deps': 'off',
		},
	},
	globalIgnores([
		// Default ignores of eslint-config-next:
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
	]),
]);

export default eslintConfig;

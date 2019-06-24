import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import autoPreprocess from 'svelte-preprocess'
import typescript from 'rollup-plugin-typescript';
import rootImport from 'rollup-plugin-root-import';
import copy from 'rollup-plugin-copy-glob';
//import rollupDotenv from 'rollup-plugin-dotenv';
import dotenvPlugin_FIX from './.build-tools/rollup-plugin-dotenv-fix'
import replace from 'rollup-plugin-replace';

const outputDir = "build";
const production = !process.env.ROLLUP_WATCH;

// this will determine the .env files to used. see README.md
process.env.NODE_ENV = production ? "production" : "development";

//root imports
let rootImportOptions = {
	root: `${__dirname}/src`,
	useEntry: 'prepend',
};

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: `${outputDir}/bundle.js`
	},
	plugins: [
		//copy static files
		copy(
			[
				{ files: 'static/**/*.*', dest: `${outputDir}` }
			],
			{ verbose: true, watch: !production }
		),
		replace({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
		dotenvPlugin_FIX(),
		svelte({
			preprocess: autoPreprocess({ /* options */ }),
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write(`${outputDir}/bundle.css`);
			}
		}),
		rootImport(rootImportOptions),
		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({ browser: true }),
		commonjs(),
		typescript({
			typescript: require('typescript')
		}),
		// Watch the output directory and refresh browser when not in production
		!production && livereload(`${outputDir}`),

		// If production - minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};

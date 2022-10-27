import { babel } from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import svg from 'rollup-plugin-svg';
import alias from '@rollup/plugin-alias';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.es.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      alias({
        resolve: ['.js', '.ts', 'tsx', 'jsx'],
        entries: [
          {
            find: '@/*',
            replacement: './src',
          },
        ],
      }),
      svg(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve(),
      typescript({
        compilerOptions: { outDir: './lib', declarationDir: './lib' },
      }),
      commonjs(),
      terser(),
    ],
  },
];

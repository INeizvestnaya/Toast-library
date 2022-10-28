import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import alias from '@rollup/plugin-alias';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import sucrase from '@rollup/plugin-sucrase';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
      alias({
        resolve: ['.js', '.ts', '.tsx', '.jsx'],
        entries: [
          {
            find: '@/*',
            replacement: './src',
          },
        ],
      }),
      resolve({ extensions: ['.ts', '.tsx'], browser: true }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      resolve(),
      commonjs(),
      terser(),
      sucrase({
        exclude: ['node_modules/**'],
        transforms: ['typescript', 'jsx'],
      }),
      image(),
    ],
  },
];

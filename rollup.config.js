import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';

const sharedConfig = {
  // external: [],
  external: ['axios', 'moment'],
  plugins: [
    // nodeResolve(),
    commonjs(),
  ],
};

export default [
  {
    input: 'src/td-api.js',
    output: [
      {
        file: 'dist/commonjs/td-api.js',
        format: 'cjs'
      },
      {
        file: 'dist/esm/td-api.js',
        format: 'es'
      },
    ],
    ...sharedConfig,
  },
  {
    input: 'src/td-utils.js',
    output: [
      {
        file: 'dist/commonjs/td-utils.js',
        format: 'cjs'
      },
      {
        file: 'dist/esm/td-utils.js',
        format: 'es'
      },
    ],
    ...sharedConfig
  },
];
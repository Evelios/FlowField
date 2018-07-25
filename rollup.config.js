import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const plugins = [
  resolve(),
  commonjs(),
];

export default {
  plugins,
  input: './flow-field.js',
  output: {
    name: 'FlowField',
    file: 'bundle.js',
    format: 'umd',
  },
};
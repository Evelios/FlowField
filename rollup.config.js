import nodeResolve from 'rollup-plugin-node-resolve';
import autoExternal from 'rollup-plugin-auto-external';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './flow-field.js',
  output: {
    name: 'FlowField',
    file: 'bundle.js',
    format: 'umd',
  },
  plugins: [
    nodeResolve(),
    autoExternal(),
    commonjs(),
  ],
};
// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: './flow-field.js',
  output: {
    file: 'bundle.js',
    format: 'umd'
  },
  name: 'FlowField',
  plugins: [resolve({
    // pass custom options to the resolve plugin
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    }
  })],
  // indicate which modules should be treated as external
  external: ['vector']
};
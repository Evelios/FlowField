export default [
  {
    input: './flow-field.js',
    output: {
      name: 'FlowField',
      file: 'bundle.js',
      format: 'umd',
      globals: 'Vector',
    },
    external: ['vector']
  },
];
// import path from 'path';

// const vector = path.resolve(__dirname, './node_modules/vector/Vector.js');

export default [
  {
    input: './flow-field.js',
    output: {
      name: 'FlowField',
      file: 'bundle.js',
      format: 'umd',
      globals: {
        'vector': 'Vector'
      },
    },
    
    external: ['vector']
  },
];
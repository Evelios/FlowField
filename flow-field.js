//  import Vector from 'vector';
const Vector = require('vector');

// let exports = module.exports = {};

exports.uniform = function(angle) {
  return (output_pos) => {
    return Vector.Polar(1, angle);
  }
};

exports.source = function(input_pos) {
  return (output_pos => {
    return Vector.magnitude(Vector.subtract(input_pos, output_pos));
  });
};

exports.sink = function(input_pos) {
  return (output_pos => {
    const sourceField = FlowField.source(input_pos);
    return Vector.inverse(sourceField(output_pos));
  });
}

exports.clockwise = function(input_pos) {
  return (output_pos => {
    const mag = Vector.magnitude(output_pos);
    const  [x, y] = output_pos;
      return [y / mag, -x / mag];
  });
}

exports.counterClockwise = function() {
  return (output_pos => {
    const mag = Vector.magnitude(output_pos);
    const [x, y] = output_pos;
    return [-y / mag, x / mag];
  });
}
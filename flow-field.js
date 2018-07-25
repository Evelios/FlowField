import Vector from 'vector';

const FlowField = {

  uniform : function(input_pos) {
    return () => {
      const angle = Vector.angle(input_pos);
      return Vector.Polar(1, angle);
    };
  },

  source : function(input_pos) {
    return (output_pos => {
      return Vector.Polar(1, Vector.angle(Vector.subtract(output_pos, input_pos)));
    });
  },

  sink : function(input_pos) {
    return (output_pos => {
      const sourceField = FlowField.source(input_pos);
      return Vector.inverse(sourceField(output_pos));
    });
  },

  clockwise : function(input_pos) {
    return (output_pos => {
      const pos_difference = Vector.subtract(input_pos, output_pos);
      const mag = Vector.magnitude(pos_difference);
      const  [x, y] = pos_difference;
        return [y / mag, -x / mag];
    });
  },

  counterClockwise : function(input_pos) {
    return (output_pos => {
      const sourceField = FlowField.clockwise(input_pos);
      return Vector.inverse(sourceField(output_pos));
    });
  },

};

export default FlowField;
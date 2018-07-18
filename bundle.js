(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vector')) :
  typeof define === 'function' && define.amd ? define(['vector'], factory) :
  (global.FlowField = factory(global.Vector));
}(this, (function (Vector) { 'use strict';

  Vector = Vector && Vector.hasOwnProperty('default') ? Vector['default'] : Vector;

  const FlowField = {

    uniform : function(angle) {
      return (output_pos) => {
        return Vector.Polar(1, angle);
      }
    },

    source : function(input_pos) {
      return (output_pos => {
        return Vector.magnitude(Vector.subtract(input_pos, output_pos));
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
        const mag = Vector.magnitude(output_pos);
        const  [x, y] = output_pos;
          return [y / mag, -x / mag];
      });
    },

    counterClockwise : function() {
      return (output_pos => {
        const mag = Vector.magnitude(output_pos);
        const [x, y] = output_pos;
        return [-y / mag, x / mag];
      });
    },

  };

  return FlowField;

})));

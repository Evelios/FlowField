(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  (function () {

  const Vector = require('vector');

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

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = FlowField;
  }
  else {
    window.FlowField = FlowField;
  }

  }) ();

})));

const tape = require('tape');
const FlowField = require('./flow-field.js');
const Fuzz = require('test-fuzzy-array')

tape('Uniform', t => {
  const uniform_center = FlowField.uniform(Math.PI / 4);
  const almostDeepEquals = Fuzz(t, 0.001);

  // Test Cases
  const angle = Math.PI / 4;
  const v1 = [ 3,  1];
  const v2 = [-2,  3];
  const v3 = [ 1, -1];
  const v4 = [-2, -1];

  // Expected Answers
  const a = [Math.SQRT1_2, Math.SQRT1_2];

  // Test
  almostDeepEquals(uniform_center(v1), a, "Input in Quadrant One");
  almostDeepEquals(uniform_center(v2), a, "Input in Quadrant Two");
  almostDeepEquals(uniform_center(v3), a, "Input in Quadrant Three");
  almostDeepEquals(uniform_center(v4), a, "Input in Quadrant Four");

  t.end();
});

tape('Source - Center', t => {
  const source_center = FlowField.source([0, 0]);
  const almostDeepEquals = Fuzz(t, 0.001);

  // Test Cases
  const angle = Math.PI / 4;
  const v1 = [ 3,  1];
  const v2 = [-2,  3];
  const v3 = [ 1, -1];
  const v4 = [-2, -1];

  // Expected Answers
  const a1 = [ 3 / Math.sqrt(10),  1 / Math.sqrt(10)];
  const a2 = [-2 / Math.sqrt(13),  3 / Math.sqrt(13)];
  const a3 = [ 1 / Math.SQRT2,    -1 / Math.SQRT2];
  const a4 = [-2 / Math.sqrt(5),  -1 / Math.sqrt(5)];

  // Test
  almostDeepEquals(source_center(v1), a1, "Input in Quadrant One");
  almostDeepEquals(source_center(v2), a2, "Input in Quadrant Two");
  almostDeepEquals(source_center(v3), a3, "Input in Quadrant Three");
  almostDeepEquals(source_center(v4), a4, "Input in Quadrant Four");

  t.end();
});

tape('Source - Offset', t => {
  const source_offset = FlowField.source([0, 0]);
  const almostDeepEquals = Fuzz(t, 0.001);

  // Test Cases
  const angle = Math.PI / 4;
  const v1 = [3, 1];
  const v2 = [-2, 3];
  const v3 = [1, -1];
  const v4 = [-2, -1];

  // Expected Answers
  const a1 = [1, 1];
  const a2 = [-1, 1];
  const a3 = [1, -1];
  const a4 = [-1, -1];

  // Test
  almostDeepEquals(source_offset(v1), a1, "Input in Quadrant One");
  almostDeepEquals(source_offset(v2), a2, "Input in Quadrant Two");
  almostDeepEquals(source_offset(v3), a3, "Input in Quadrant Three");
  almostDeepEquals(source_offset(v4), a4, "Input in Quadrant Four");

  t.end();
});

tape('Clockwise - Center', t => {
  const clockwise_center = FlowField.clockwise([0, 0]);
  const almostDeepEquals = Fuzz(t, 0.001);

  // Test Cases
  const angle = Math.PI / 4;
  const v1 = [3, 1];
  const v2 = [-2, 3];
  const v3 = [1, -1];
  const v4 = [-2, -1];

  // Expected Answers
  const a1 = [1, 1];
  const a2 = [-1, 1];
  const a3 = [1, -1];
  const a4 = [-1, -1];

  // Test
  almostDeepEquals(clockwise_center(v1), a1, "Input in Quadrant One");
  almostDeepEquals(clockwise_center(v2), a2, "Input in Quadrant Two");
  almostDeepEquals(clockwise_center(v3), a3, "Input in Quadrant Three");
  almostDeepEquals(clockwise_center(v4), a4, "Input in Quadrant Four");

  t.end();
});

tape('Clockwise - Offset', t => {
  const offset = [1, 1];
  const clockwise_offset = FlowField.clockwise(offset);
  const almostDeepEquals = Fuzz(t, 0.001);

  // Test Cases
  const angle = Math.PI / 4;
  const v1 = [3, 1];
  const v2 = [-2, 3];
  const v3 = [1, -1];
  const v4 = [-2, -1];

  // Expected Answers
  const a1 = [1, 1];
  const a2 = [-1, 1];
  const a3 = [1, -1];
  const a4 = [-1, -1];

  // Test
  almostDeepEquals(clockwise_offset(v1), a1, "Input in Quadrant One");
  almostDeepEquals(clockwise_offset(v2), a2, "Input in Quadrant Two");
  almostDeepEquals(clockwise_offset(v3), a3, "Input in Quadrant Three");
  almostDeepEquals(clockwise_offset(v4), a4, "Input in Quadrant Four");

  t.end();
});

tape('Counter Clockwise - Center', t => {
  const counter_clockwise_center = FlowField.counterClockwise([0, 0]);
  const almostDeepEquals = Fuzz(t, 0.001);

  // Test Cases
  const angle = Math.PI / 4;
  const v1 = [3, 1];
  const v2 = [-2, 3];
  const v3 = [1, -1];
  const v4 = [-2, -1];

  // Expected Answers
  const a1 = [1, 1];
  const a2 = [-1, 1];
  const a3 = [1, -1];
  const a4 = [-1, -1];

  // Test
  almostDeepEquals(counter_clockwise_center(v1), a1, "Input in Quadrant One");
  almostDeepEquals(counter_clockwise_center(v2), a2, "Input in Quadrant Two");
  almostDeepEquals(counter_clockwise_center(v3), a3, "Input in Quadrant Three");
  almostDeepEquals(counter_clockwise_center(v4), a4, "Input in Quadrant Four");

  t.end();
});

tape('Counter Clockwise - Offset', t => {
  const offset = [1, 1];
  const counter_clockwise_offset = FlowField.counterClockwise(offset);
  const almostDeepEquals = Fuzz(t, 0.001);

  // Test Cases
  const angle = Math.PI / 4;
  const v1 = [3, 1];
  const v2 = [-2, 3];
  const v3 = [1, -1];
  const v4 = [-2, -1];

  // Expected Answers
  const a1 = [1, 1];
  const a2 = [-1, 1];
  const a3 = [1, -1];
  const a4 = [-1, -1];

  // Test
  almostDeepEquals(counter_clockwise_offset(v1), a1, "Input in Quadrant One");
  almostDeepEquals(counter_clockwise_offset(v2), a2, "Input in Quadrant Two");
  almostDeepEquals(counter_clockwise_offset(v3), a3, "Input in Quadrant Three");
  almostDeepEquals(counter_clockwise_offset(v4), a4, "Input in Quadrant Four");

  t.end();
});
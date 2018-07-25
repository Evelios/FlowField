"use strict";

// Colors
var bgColor = tinycolor("#303030");
var bgAccent = tinycolor("#393939");
var primaryColor = tinycolor("#AA7539");
var secondaryColor = tinycolor("#A23645");
var tertiaryColor = tinycolor("#27566B");
var quaternaryColor = tinycolor("#479030");

// Globals
var width;
var height;
var bbox;
var flow_field;
var points;

var params = {
    // Parameters
    density: 25,
    particle_speed: 2,
    field_choice: 'Uniform',
    reset: createAndRender,

    // Options
    field_options: [
        'Uniform',
        'Source',
        'Sink',
        'Clockwise',
        'Counter Clockwise'
    ],

    field_functions: {
        'Uniform'           : FlowField.uniform,
        'Source'            : FlowField.source,
        'Sink'              : FlowField.sink,
        'Clockwise'         : FlowField.clockwise,
        'Counter Clockwise' : FlowField.counterClockwise
    }
};

// ---- Main Functions ---------------------------------------------------------

function setup() {
    width = document.body.clientWidth || window.innerWidth;
    height = document.body.clientHeight || window.innerHeight;
    bbox = [width, height];

    createCanvas(width, height);

    setUpGui();
    createAndRender();
}

function draw() {
    update();
    render();
}

function createAndRender() {
    create();
    render();
}

function setUpGui() {
    var gui = new dat.GUI();

    gui.add(params, "density", 15, 50, 1).name("Particle Density").onChange(createAndRender);
    gui.add(params, "particle_speed", 1, 10, 1).name("Particle Speed");
    gui.add(params, "field_choice", params.field_options).name("Flow Field").onChange(createAndRender);
    gui.add(params, "reset").name("Reset");
    frameRate(60);
}

// ---- Implementation Functions -----------------------------------------------

function create() {
    var field_center = [width / 2, height / 2];
    flow_field = params.field_functions[params.field_choice](field_center);
    points = Poisson(bbox, params.density);
    // points = Poisson(bbox, params.densityFunction[params.distribution]);
}

function update() {
    // Move acccording to the flow field and wrap on the screen
    points = points.map(vec => {
        const local_field = flow_field(vec);
        return wrapToScreen([
            vec[0] + local_field[0] * params.particle_speed,
            vec[1] + local_field[1] * params.particle_speed
        ]);
    });
}

function render() {
    background(bgColor.toHexString());

    noStroke();
    fill(primaryColor.toHexString());
    for (var point of points) {
        const ellipse_size = 5;
        ellipse(point[0], point[1], ellipse_size);
    }
}

// ---- Helper Functions -------------------------------------------------------

function wrapToScreen(vector) {
    return [
        (vector[0] + width)  % width,
        (vector[1] + height) % height
    ];
}
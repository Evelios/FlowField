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

var params = {
    // Parameters
    density: 25,
    field_choice: 'Uniform',

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

function setup() {
    width = document.body.clientWidth || window.innerWidth;
    height = document.body.clientHeight || window.innerHeight;
    bbox = [width, height];

    createCanvas(width, height);

    setUpGui();
    createAndRender();
}

function setUpGui() {
    var gui = new dat.GUI();

    gui.add(params, "density", 15, 50, 1).name("Particle Density").onChange(createAndRender);
    gui.add(params, "field_choice", params.field_options).name("Flow Field").onChange(createAndRender);
}

function createAndRender() {
    create();
    render();
}

function create() {
    var field_center = [0, 0];
    flow_field = params.field_functions[params.field_choice](field_center);
    console.log(flow_field);
    // points = poisson(bbox, densityFunction[params.distribution]);
}

function render() {
    background(bgColor.toHexString());

    // noStroke();
    // fill(primaryColor.toHexString());
    // for (var point of points) {
    //     const ellipse_size = 5;
    //     ellipse(point[0], point[1], ellipse_size);
    // }
}
// https://kylemcdonald.github.io/cv-examples/

var capture;
var previousPixels;
var flow;
var w = 640,
    h = 480;
var step = 8;

var uMotionGraph, vMotionGraph;

function setup() {
    createCanvas(w, h);
    capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
    capture.elt.setAttribute('playsinline', '');
    capture.hide();
    flow = new FlowCalculator(step);
    uMotionGraph = new Graph(100, -step / 2, +step / 2);
    vMotionGraph = new Graph(100, -step / 2, +step / 2);
}

function copyImage(src, dst) {
    var n = src.length;
    if (!dst || dst.length != n) dst = new src.constructor(n);
    while (n--) dst[n] = src[n];
    return dst;
}

function same(a1, a2, stride, n) {
    for (var i = 0; i < n; i += stride) {
        if (a1[i] != a2[i]) {
            return false;
        }
    }
    return true;
}

function draw() {
    capture.loadPixels();
    if (capture.pixels.length > 0) {
        if (previousPixels) {

            // cheap way to ignore duplicate frames
            if (same(previousPixels, capture.pixels, 4, width)) {
                return;
            }

            flow.calculate(previousPixels, capture.pixels, capture.width, capture.height);
        }
        previousPixels = copyImage(capture.pixels, previousPixels);
        image(capture, 0, 0, w, h);

        if (flow.flow && flow.flow.u != 0 && flow.flow.v != 0) {
            uMotionGraph.addSample(flow.flow.u);
            vMotionGraph.addSample(flow.flow.v);

            strokeWeight(2);
            flow.flow.zones.forEach(function (zone) {
                stroke(map(zone.u, -step, +step, 0, 255),
                       map(zone.v, -step, +step, 0, 255), 128);
                line(zone.x, zone.y, zone.x + zone.u, zone.y + zone.v);
            })
        }

        noFill();
        stroke(255);

        // draw left-right motion
        uMotionGraph.draw(width, height / 2);
        line(0, height / 4, width, height / 4);

        // draw up-down motion
        translate(0, height / 2);
        vMotionGraph.draw(width, height / 2);
        line(0, height / 4, width, height / 4);
    }
}

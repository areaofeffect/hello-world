// https://kylemcdonald.github.io/cv-examples/

// based on https://github.com/mtschirs/js-objectdetect
// the jsfeat detector is much faster but only does one object at a time:
// https://inspirit.github.io/jsfeat/sample_haar_face.html
// also see:
// https://github.com/mtschirs/js-objectdetect/blob/master/js/objectdetect.frontalcatface.js
// https://ahprojects.com/projects/cv-dazzle/

var w = 640,
    h = 480;
var detector;
var classifier = objectdetect.frontalface;
var img;
var faces;

function setup() {
    createCanvas(w, h);
    var scaleFactor = 1.2;
    detector = new objectdetect.detector(w, h, scaleFactor, classifier);
    img = loadImage('eniac.jpg', function (img) {
        faces = detector.detect(img.canvas);
    })
}

function draw() {
    image(img, 0, 0, w, h);

    stroke(255);
    noFill();
    if (faces) {
        faces.forEach(function (face) {
            var count = face[4];
            if (count > 4) { // try different thresholds
                rect(face[0], face[1], face[2], face[3]);
            }
        })
    }
}

var w = 640,
    h = 640;
var detector;
var classifier = objectdetect.frontalface;
var img;
var faces;
var scaleSlider;  // slider for scaleFactor

function setup() {
    createCanvas(w, h);
    
    // Set up the slider for scaleFactor
    scaleSlider = createSlider(1.0, 5.0, 3.0, 0.1);  // min, max, default, step
    scaleSlider.position(10, h + 10);  // position below the canvas
    
    img = loadImage('./images/photo1.jpg', function (img) {
        updateDetector();
        faces = detector.detect(img.canvas);
    });
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
        });
    }
    
    // Update the detector if scaleFactor has changed
    if (scaleSlider.value() !== detector.scaleFactor) {
        updateDetector();
        faces = detector.detect(img.canvas);
    }
}

// Helper function to update the detector with the current scaleFactor
function updateDetector() {
    var scaleFactor = scaleSlider.value();
    detector = new objectdetect.detector(w, h, scaleFactor, classifier);
}

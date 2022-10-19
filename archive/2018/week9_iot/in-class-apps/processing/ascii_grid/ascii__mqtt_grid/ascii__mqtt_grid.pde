import mqtt.*;

MQTTClient client;

int gridIndex = 0;
int gridMax = 99;

ArrayList<PVector> gridPos = new ArrayList<PVector>();

int r;
int g;
int b;

String ascii = "0";

void setup() {
  // standard setup code
  size(600, 400);
  background(255);
  textSize(30);

  // setup mqtt client
  client = new MQTTClient(this);
  client.connect("http:// 127.0.0.1", "processing");
  client.subscribe("ascii");
  //client.unsubscribe("/example");
  //client.publish("/hello", "world");

  r = int(random(255));
  g = int(random(255));
  b = int(random(255));

  // make a grid of x,y positions based on our canvas size
  for (int a = 0; a < width; a += 60) {
    for (int b = 0; b < height; b += 40) {

      gridPos.add( new PVector(a, b) );
    }
  }

  //println(gridPos);
}

void draw() {
  float xVal = gridPos.get(gridIndex).x;
  float yVal = gridPos.get(gridIndex).y;

  // fill the background of each square with white before drawing ascii chars
  fill(255);
  noStroke();
  rect(xVal, yVal, 60, 40);

  // draw the incoming ascii from serial
  fill(r, g, b);
  text(ascii, xVal, yVal);

  line(0, 0, width, height);
}

void keyPressed() {
  //
}

void messageReceived(String topic, byte[] payload) {
  println("new message: " + topic + " - " + new String(payload));

  String msg = new String(payload);

  if (msg.length() > 0) {
    // get the new ascii object
    ascii = msg;

    // increment the grid position
    if (gridIndex < gridMax) {
      gridIndex++;
    } else {
      gridIndex = 0;
    }

    // get a new random color
    r = int(random(255));
    g = int(random(255));
    b = int(random(255));
  }
}
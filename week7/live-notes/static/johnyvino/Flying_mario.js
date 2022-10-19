//object Oriented Collision

var ufo;
//var lives;
var pts;
var emy;
var rects = [];
var numRects = 20;
var cir;
var img;

function preload() {
  img = loadImage("iPhone8.jpg");
  ufo = loadImage("rocket.png");
  pts = loadImage("points.png");
  emy = loadImage("enemy.png");
  song = loadSound('mario.mp3');


}


function setup() {
	song.play();
	createCanvas(375,667);

	for(i=0;i<numRects;i++){
		r = new rectObj(random(width),random(height), random(10,50), random(10,50) ) // generate a rectObj
		rects.push(r); //add it to the array.
	}

	cir = new circleObj(0);// create a new circle object
	console.log(rects);
}

function draw(){
	  image(img, 0, 0, width, height);
	   // setText();
	for(i=0;i<numRects;i++){
		rects[i].disp();
		rects[i].collide( cir ); //collide against the circle object
	}
    

    image(ufo, mouseX - ufo.width/2, mouseY - ufo.height/2);
	cir.disp(mouseX,mouseY); //pass the x,y pos in to the circle.

}

function rectObj(x,y,w,h){
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	this.color = color(255)
	this.hit = false;

	this.collide = function(obj){

		this.hit = collideRectCircle(this.x, this.y, this.w, this.h, obj.x, obj.y, obj.dia); //collide the cir object into this rectangle object.

		if(this.hit){
			this.color = color(0) //set this rectangle to be black if it gets hit
		//	lives += 1;

		}

	}

	this.disp = function(){
		noStroke();
		fill(this.color);
		this.y += 3 //move to the right!
		if(this.y > height){ //loop to the left!
		this.y = -this.h;
		}
	    image(pts,this.x,this.y,34,34);
	    image(emy,this.x+20,this.y+20,34,34);

	}

}



function circleObj(dia){
	this.dia = dia;
	this.color = color(random(255),random(255),random(255))
	this.x;
	this.y;

	this.disp = function(x,y){
		this.x = x;
		this.y = y;
		noStroke();
		fill(this.color);
		ellipse(this.x,this.y,this.dia,this.dia);
	}

}
/* Box model detection, return true on collision */
function hitBox( rocket, points ) {
	/* Source and target objects contain x, y and width, height */
	return !(
		( ( rocket.y + rocket.height ) < ( points.y ) ) ||
		( rocket.y > ( points.y + points.height ) ) ||
		( ( rocket.x + rocket.width ) < points.x ) ||
		( rocket.x > ( points.x + points.width ) )
	);
}

function setText() {
  textAlign(CENTER);
  textSize(22);
  text(lives, 10, 20);
}

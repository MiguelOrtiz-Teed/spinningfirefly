var angle = 0.0;


function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);








  push();
  firefly(0, 0);
  pop();


  push();
  translate(300, 300);
  scale(.5);
  firefly();
  pop();

  push();
  translate(-100, -100);
  scale(.75);
  firefly();
  pop();

  push();
  translate(100, -100);
  scale(1.5);
  firefly();
  pop();

  push();
  translate(100, -400);
  scale(1.5);
  firefly();
  pop();

  push();
  translate(0, 500);
  scale(.125);
  firefly();
  pop();

  push();
  translate(0, 250);
  scale(.3);
  firefly();
  pop();

  push();
  translate(-300, 25);
  scale(1.75);
  firefly();
  pop();


}

function firefly(x, y) {
  push();

  translate(300, 300);

  rotate(angle);

  noStroke();
  //firefly body
  fill(255)
  circle(0, 0, 100);
  fill(25, 75, 75);
  fill(135)
  noStroke();
  ellipse(-68,-10, 100, 25);
  circle(78, -25, 26);
  //head
  fill(255, 75, 75);
  circle(60, -15, 55);
  //background eye
  stroke(1);
  fill(255);
  circle(75, -24, 28);
  //eye
  fill(255);
  circle(75, -24, 28);
  //pupil
  fill(0);
  circle(80, -24, 10);
  fill(0);
  circle(78, 0, 10);

  rotate(45);
  fill(135)
  noStroke();
  ellipse(-68,-10, 100, 25);

  angle += .3;
  pop()


}

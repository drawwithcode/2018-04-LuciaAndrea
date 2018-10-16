var ambience;
function preload() {
  // put preload code here
  song = loadSound('addons/394411__inspectorj__ambience-london-waterloo-train-station.wav');
}


var balls = [];


function setup() {

  createCanvas(windowWidth, windowHeight);
 song.loop();


  var ballNumber = 70;


  for (var i = 0; i < ballNumber; i++) {


    var myBall = new Ball(random(0, width), random(0, height), 30);

// myBall.diameter = random(15, 30)
    myBall.speed = random(1, 2);
    myBall.color = color(255, 100);
    balls.push(myBall);
  }
}

function mousePressed() {
  for (var j = 0; j < balls.length; j++)
    balls[j].click();


}


function draw() {
  background(50,50,50)
  for (var j = 0; j < balls.length; j++) {

    balls[j].move();
    balls[j].display();

  }
  textFont('Helvetica');
  push();
fill('white');
  textSize(30);
  text('Click on some commuters to finally call ', windowWidth/8, windowHeight/3);
  textSize(40)
  text('their Trenord S13 when they have eventually lost their hopes*', windowWidth/8, windowHeight/2)
  textSize(20);
  textAlign(CENTER);
  fill('red');
  text('* no commuters have been harmed to create this visualization', windowWidth/2, windowHeight);
  push();
  fill('white');
  rect(0,28,554,54)
  fill('blue');

  rect(0, 30, 550, 50);

  pop();
  textSize(25)
  textFont('Arial');
fill('white');
textAlign(LEFT);
  text('MILANO NORD BOVISA POLITECNICO', windowWidth/22, windowHeight/11)

  pop();
}



function Ball(_x, _y, _diameter) {
  this.x = _x;
  this.y = _y;
  this.diameter = _diameter;
  this.color = 'blue';
  this.speed = 20;


  var yDirezione = 1;
  var xDirezione = 1;

  this.display = function() {
    noStroke()
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }
  this.move = function() {
    this.x += this.speed * xDirezione;
    this.y += this.speed * yDirezione;

    if (this.y > height || this.y < 0) {
      yDirezione = yDirezione * -1;
    }

    if (this.x > width || this.x < 0) {
      xDirezione = xDirezione * -1;

    }
    this.click = function() {
      var d = dist(mouseX, mouseY, this.x, this.y);
      if (d < 30) {
        this.color = color(random(255), random(255), random(255),200);
        this.speed = 17;
        this.move = function() {

    //      this.x += this.speed * yDirezione;
    this.y += this.speed * xDirezione;


          }

      }

    }

  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)

}

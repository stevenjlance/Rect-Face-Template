//Everyone in your break out room will be working on this RECTANGLE face shape. 

//Feel free to style the face template and add to it, but don't change or move the base face rect - you'll see why tomorrow.

//Pick a different emotion/mood/character for everyone in your group to create and then fork this project and get started. :)

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  text(mouseX + ", " + mouseY, 20,20)

  //base face shape
  rect(30,50,330,250)

}
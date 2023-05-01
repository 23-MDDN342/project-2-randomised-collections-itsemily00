/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function myface(){
  let photoSizeX = 18;
  let photoSizeY = 15;
  let orange = color("#ed540e");
  let yellow = color("#ffea9e");
  push(); // photo
  stroke(0);
  strokeWeight(0.2);
  fill(255);
  rectMode(CENTER);
  rect(0, 0, photoSizeX, photoSizeY);
  pop();
  

  push(); //body
  noStroke();
  fill(orange);
  rect(-5, 0, 4, 6, 2, 2, 0, 0);
  pop();

  push();
  noStroke();
  fill(yellow);
  arc(2.5, 0.5, 6, PI + QUARTER_PI, CHORD);
  pop();

  push(); //body ?
  noStroke();
  fill(orange);
  ellipse(2.5, 0.5, 4.5);
  ellipse(2.5, 5, 4.5, 8);



  
  

  push(); // photo frame
  stroke(0);
  strokeWeight(0.2);
  noFill();
  rectMode(CENTER);
  rect(0, 0, photoSizeX*0.8, photoSizeY*0.8);
  pop();
}

function myface1 (){
  // push(); //face
  // noFill();
  // stroke(0);
  // beginShape();

  // endShape();
  // pop();
  let eyeSizeX = 1;
  let eyeSizeY = 2;

  push(); // bounding box
  noFill();
  stroke(0);
  strokeWeight(0.2);
  rectMode(CENTER);
  rect(0, 0, 20);
  pop();

  noStroke(); //eyes
  fill(0);
  ellipse(-4, -3, eyeSizeX, eyeSizeY);
  ellipse(4, -3, eyeSizeX, eyeSizeY);

  push(); //nose
  noFill();
  stroke(0);
  strokeWeight(0.2);
  translate(0, -1);
  beginShape();
  vertex(-2, 0);
  vertex(0, -1.5);
  vertex(2, -1);
  vertex(2.5, 1);
  vertex(-0.5, 1.8);
  vertex(-2, 0);
  endShape();
  pop();

  push(); //collar
  noFill();
  stroke(0);
  strokeWeight(0.2);
  beginShape();
  vertex(-5, 3);
  vertex(-4, 2);
  vertex(-1.5, 1.8);
  vertex(0, 4);
  vertex(3, 1.3);
  vertex(5, 2);
  vertex(4.5, 6);
  vertex(-4, 6);
  vertex(-5, 3);
  endShape();
  pop();

  push(); // face
  angleMode(DEGREES);
  noFill();
  stroke(0);
  strokeWeight(0.2);
  arc(1, -2, 10, 15, -30, 40);
 
  pop();
}

function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}

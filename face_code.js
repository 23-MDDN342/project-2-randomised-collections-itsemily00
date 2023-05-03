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
function myface(eyes, mouths, poses, rotation, props){
  //********Set up********//
  angleMode(DEGREES);
  rotate(rotation); 
  let centerX = 0;
  let eyeSizeX = 3;
  let eyeSizeY = 4;
  let frogEyeX = -1;
  let eyeRadiX = eyeSizeX/2;
  let eyeRadiY = eyeSizeY/2;
  let eyeDistance = 2; 
  let photoSizeX = 18;
  let photoSizeY = 15;
  //colors
  let darkGery = color("#262525");
  let yellow = color("#fac641");
  let creamy = color("#F0DFD9");
  let red = color("#eb4b83");
  let blue = color("#4bb5eb");
  let green = color("#4ccfa8");

//********Draw the photo frame********//
// photo outer line
  push(); 
  stroke(0);
  strokeWeight(0.2);
  fill(255);
  rectMode(CENTER);
  rect(centerX, 0, photoSizeX, photoSizeY);
  pop();

// photo background
  push(); 
  noStroke();
  fill(creamy);
  rectMode(CENTER);
  rect(centerX, 0, photoSizeX*0.8, photoSizeY*0.8);
  pop();

//********props********//
if (props == 2) {
  ballon(-3, -1, blue);
  ballon(-5, 0, red);
  ballon(0.5, -3.8, green);
  ballon(3.8, -2.8, red);
  ballon(2.5, -2, yellow);
  ballon(5, 0, blue);
  
  
}
//********Draw the frog********//
// torso
  noStroke(); 
  fill(darkGery);
  rectMode(CENTER);
  rect(centerX, 4, 4, 4);

// head
  noStroke(); 
  fill(darkGery);
  ellipse(frogEyeX, 1, eyeSizeX, eyeSizeY); // space for eyes
  ellipse(frogEyeX + eyeDistance, 1, eyeSizeX, eyeSizeY);
  ellipse(centerX, 2.5, eyeSizeX*2, eyeSizeY*0.75); // space for mouth

  fill(255); // eyes
  ellipse(frogEyeX/0.9, 0.8, eyeSizeX*0.6, eyeSizeY*0.7); // left
  ellipse(frogEyeX*0.9 + eyeDistance, 0.8, eyeSizeX*0.6, eyeSizeY*0.7);

//*****eye expressions*****//
if (eyes == 0){
// looking right
  push(); 
  noStroke(); // looking right
  fill(darkGery);
  ellipse(frogEyeX/1.2, 0.8, eyeSizeX*0.2, eyeSizeY*0.4);
  ellipse(frogEyeX/1.2 + eyeDistance*1.1, 0.8, eyeSizeX*0.2, eyeSizeY*0.4);
  pop();
  
} else if (eyes == 1){
// wink eyes
  push(); 
  stroke(darkGery);
  strokeWeight(0.3);
  line(frogEyeX/1.2, 0.8, (frogEyeX - eyeRadiX)*0.5, 1); // left
  line(frogEyeX/1.2, 0.8, (frogEyeX - eyeRadiX)*0.5, 0.6);
  line(frogEyeX/1.2 + eyeDistance*1.1, 0.7,frogEyeX/1.2 + eyeDistance*1.1, 0.9); // right
  pop();

 } else if (eyes == 2){
// smiley eyes
  push();
  noFill();
  stroke(darkGery);
  strokeWeight(0.3);
  angleMode(DEGREES);
  arc(frogEyeX/0.9, 1, 0.5, 0.8, 180, 0);
  arc(frogEyeX*0.9 + eyeDistance, 1, 0.5, 0.8, 180, 0);
  pop();
  }




  
//*****poses*****//
if(poses == 0) { 
  push();
  noFill();
  stroke(darkGery);
  strokeWeight(0.6);
  angleMode(DEGREES);
  arc(frogEyeX*1.3, 5.3, 2.5, 4, 160, 240); // arms 
  arc(-frogEyeX*1.3, 5.3, 2.5, 4, 240, 20);
  pop();
} else if (poses == 1){ // peace sign
  noFill();
  stroke(darkGery);
  strokeWeight(0.6);
  strokeJoin(ROUND);
  angleMode(DEGREES);
  arc(frogEyeX*2, 1.9, 3.5, 4, 90, 170); // arms
  arc(frogEyeX*-2, 4.7, 3, 1.5, 270, 90);

  push(); // fist
  fill(darkGery);
  noStroke();
  ellipse(-3.7, 2.5, 1);  
  pop();

  push(); // "peace" fingers
  noFill();
  stroke(darkGery);
  strokeWeight(0.4);
  strokeJoin(ROUND);
  line(-3.7, 2.5, -4, 1.9);
  line(-3.6, 2.5, -3.4, 1.9);
  pop();

} else if (poses == 2){
  push();
  noFill();
  stroke(darkGery);
  strokeWeight(0.6);
  strokeJoin(ROUND);
  angleMode(DEGREES);
  rotate(-20);
  arc(frogEyeX*3.3, 3.75, 2, 1.5, 90, 270); // arms  
  pop();

  push();
  noFill();
  stroke(darkGery);
  strokeWeight(0.6);
  strokeJoin(ROUND);
  angleMode(DEGREES);
  arc(frogEyeX*-2.5, 3, 3, 2, 340, 120);
  pop();

  push(); // fist
  fill(darkGery);
  noStroke();
  ellipse(3.9, 2.6, 0.8);  
  pop();

  ballon(4, -3, red);
}

//*****mouth expressions*****//
if (mouths == 0){
// smile
  noFill(); 
  stroke(255);
  strokeWeight(0.3);
  angleMode(DEGREES);
  arc(centerX, 2.8, 2, 1, 2, 110);
} else if (mouths == 1){
// circle mouth
  noFill(); 
  stroke(255);
  strokeWeight(0.3);
  ellipse(centerX, 3, 0.8, 1); 
  } else if (mouths == 2){
// laughing mouth
  fill(255);
  noStroke();
  angleMode(DEGREES);
  arc(centerX, 2.5, 1.5, 2, 0, 180, CHORD);
  }  

//*****props*****//
if (props == 0) {
  bowtie(0, 4.2);
} else if (props == 1) {
  glasses(-1.1, 1.1, red);
} else if (props == 3) {
  glasses(-1.1, 1.1, blue);
}
  
  

//********Draw the photo frame********//
  push(); // photo frame
  stroke(0);
  strokeWeight(0.2);
  noFill();
  rectMode(CENTER);
  rect(0, 0, photoSizeX*0.8, photoSizeY*0.8);
  pop();
}

function ballon (x, y, ballonColour) {
  
  let darkGery = color("#262525");
  stroke(darkGery);
  strokeWeight(0.2);
  strokeJoin(ROUND);
  fill(ballonColour);
  ellipse(x, y, 3, 4); // ballon
  triangle(x - 0.5, y + 2.5, x, y + 2, x + 0.5, y + 2.5); // knot
  line(x, y + 2.5, x, y + 6); // string
}

function bowtie (bowtieX, bowtieY) {
  fill(255);
  noStroke();
  triangle(bowtieX - 1, bowtieY - 0.5, bowtieX - 1, bowtieY + 0.5, bowtieX, bowtieY);
  triangle(bowtieX + 1, bowtieY - 0.5, bowtieX + 1, bowtieY + 0.5, bowtieX, bowtieY);
}

function glasses (glassesX, glassesY, glassesColour) {
  noFill();
  stroke(0.2);
  stroke(glassesColour);
  angleMode(DEGREES);
// left
  arc(glassesX, glassesY, 2, 3, 0, 180, CHORD); 
// shades
  line(glassesX - 0.5, glassesY, glassesX - 0.5, glassesY+1.3);
  line(glassesX, glassesY, glassesX, glassesY+1.5); 
  line(glassesX + 0.5, glassesY, glassesX + 0.5, glassesY+1.3);
// right
  arc(glassesX + 2.2, glassesY, 2, 3, 0, 180, CHORD);
// shade
  line(glassesX + 1.7, glassesY, glassesX + 1.7, glassesY+1.3);
  line(glassesX + 2.2, glassesY, glassesX + 2.2, glassesY+1.5); 
  line(glassesX + 2.7, glassesY, glassesX + 2.7, glassesY+1.3);
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

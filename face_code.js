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
function myface(eyes, mouths, pose){
  let centerX = 0;
  let eyeSizeX = 3;
  let eyeSizeY = 4;
  let frogCenterX = -3;
  let eyeRadiX = eyeSizeX/2;
  let eyeRadiY = eyeSizeY/2;
  let eyeDistance = 2; 
  let photoSizeX = 18;
  let photoSizeY = 15;
  //colors
  let darkGery = color("#262525");
  let yellow = color("#fac641");
  let creamy = color("#F0DFD9");
  let treeColor1 = color("#9CBC4C");
  let treeColor2 = color("#49A569");
  let treeColor3 = color("#00887B");
  let treeBrown = color("#a58049");
  let treeCenterX = 3;
  let treeCenterY = 0.5;



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
  fill(creamy)
  rectMode(CENTER);
  rect(centerX, 0, photoSizeX*0.8, photoSizeY*0.8);
  pop();

//********Draw the frog********//
// torso
  noStroke(); 
  fill(darkGery);
  rectMode(CENTER);
  rect(frogCenterX, 4, 4, 4);

// head
  noStroke(); 
  fill(darkGery);
  ellipse((frogCenterX - eyeRadiX)*0.9, 1, eyeSizeX, eyeSizeY); // space for eyes
  ellipse((frogCenterX - eyeRadiX + eyeDistance)*0.8, 1, eyeSizeX, eyeSizeY);
  ellipse(frogCenterX, 2.5, eyeSizeX*2, eyeSizeY*0.75); // space for mouth

  fill(255); // eyes
  ellipse(-4.1, 0.8, eyeSizeX*0.6, eyeSizeY*0.7);
  ellipse(-1.9, 0.8, eyeSizeX*0.6, eyeSizeY*0.7);

//*****eye expressions*****//
// looking right
  // push(); 
  // noStroke(); // looking right
  // fill(darkGery);
  // ellipse(-3.7, 0.8, eyeSizeX*0.2, eyeSizeY*0.4);
  // ellipse(-1.5, 0.8, eyeSizeX*0.2, eyeSizeY*0.4);
  // pop();

// wink eyes
  push(); 
  stroke(darkGery);
  strokeWeight(0.3);
  line(frogCenterX/0.8, 0.8, (frogCenterX - eyeRadiX)*0.9, 1); //left
  line(frogCenterX/0.8, 0.8, (frogCenterX - eyeRadiX)*0.9, 0.6);

  line((frogCenterX - eyeRadiX + eyeDistance)*0.8, 0.8, (frogCenterX - eyeRadiX + eyeDistance)*0.8, 1);
  pop();


//*****mouth expressions*****//
// smile
  noFill(); 
  stroke(255);
  strokeWeight(0.3);
  // angleMode(DEGREES);
  // arc(frogCenterX, 2.8, 2, 1, 2, 110);

// circle mouth
  ellipse(frogCenterX, 3, 0.8, 1); 

//********Draw the tree********//
  push();
  fill(treeBrown);
  noStroke();
  angleMode();
  rect(treeCenterX, treeCenterY*9, 2, 3);
  pop();

  push();
  fill(treeColor3);
  stroke(treeColor3);
  strokeWeight(0.5);
  strokeJoin(ROUND);
  translate(0, 3);
  triangle(treeCenterX - 2.5, treeCenterY, treeCenterX, -1.5, treeCenterX + 2.5, treeCenterY);
  pop();

  push();
  fill(treeColor2);
  stroke(treeColor2);
  strokeWeight(0.5);
  strokeJoin(ROUND);
  translate(0, 1.5);
  triangle(treeCenterX - 2, treeCenterY, treeCenterX, -1.5, treeCenterX + 2, treeCenterY);
  pop();

  push();
  fill(treeColor1);
  stroke(treeColor1);
  strokeWeight(0.5);
  strokeJoin(ROUND);
  triangle(treeCenterX - 1.5, treeCenterY, treeCenterX, -1.5, treeCenterX + 1.5, treeCenterY);
  pop();

  push();
  fill(255);
  translate(-0.7, 0.5);
  ellipse(treeCenterX, treeCenterY, 0.5, 1);
  pop();

  push();
  fill(darkGery);
  noStroke();
  translate(-0.7, 0.5);
  ellipse(treeCenterX, treeCenterY, 0.3);
  pop();

  push();
  fill(255);
  translate(0.7, 0.5);
  ellipse(treeCenterX, treeCenterY, 0.5, 1);
  pop();

  push();
  fill(darkGery);
  noStroke();
  translate(0.7, 0.5);
  ellipse(treeCenterX, treeCenterY, 0.3);
  pop();

  push();
  noFill();
  stroke(darkGery);
  strokeWeight(0.25);
  angleMode(DEGREES);
  arc(treeCenterX, treeCenterY + 0.9, 0.6, 0.6, 20, 160)
  



//********Draw the photo frame********//
  push(); // photo frame
  stroke(0);
  strokeWeight(0.2);
  noFill();
  rectMode(CENTER);
  rect(0, 0, photoSizeX*0.8, photoSizeY*0.8);
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

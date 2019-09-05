function setup() {
  createCanvas(400, 400);
  
  
}

function draw() {

  background(247, 244, 243);
  var r = 400/7;
  
  var s = second();
  let c = map(s, 0, 59, 0, 399);
  //print(c);
  noStroke();
  if (s%2 == 1){
    fill(255, 223, 69);
  }
  else{
    fill(242, 67, 51);
  }
  triangle(5*r, 0, 6*r, 0, (11*r)/2, c);
  
  var m = minute();
  let t = map(m, 0, 59, 0, 399);
  //print(t)
  noStroke();
  if (m%2 == 1){
    fill(46, 41, 78);
  }
  else{
    fill(107, 127, 215);
  }
  triangle(3*r, 400, 4*r, 400, (7*r)/2, 400-t);
  
  var h = hour();
  let l = map(h, 0, 23, 0, 399);
  noStroke();
  if (h%2 == 1){
    fill(255, 223, 69);
  }
  else{
    fill(242, 67, 51);
  }
  triangle(r, 0, 2*r, 0, 3*r/2, l);
  
}
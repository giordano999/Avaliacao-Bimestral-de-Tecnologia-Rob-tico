let angle = 0;
let gridSize = 5; // Number of cubes in each row and column
let cubeSize = 40; // Size of each cube

function setup() {
  createCanvas(400, 400, WEBGL);
  noFill();
}

function draw() {
  background(220);
  
  let spacing = cubeSize * 1.5;
  translate(-spacing * (gridSize - 1) / 2, -spacing * (gridSize - 1) / 2, 0);
  
  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      push();
      translate(x * spacing, y * spacing, 0);
      rotateX(angle);
      rotateY(angle * 0.3);
      box(cubeSize);
      pop();
    }
  }
  
  angle += 0.03; // Increase to rotate faster
}

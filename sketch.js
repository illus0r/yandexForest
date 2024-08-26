function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  background(220)

  // Вызов функций отрисовки для каждого скетча
  drawSketch1()
  drawSketch2()
  // ...
  drawSketch100()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

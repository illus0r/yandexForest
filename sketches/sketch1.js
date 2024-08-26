let canvas1

function setupSketch1() {
  canvas1 = createGraphics(200, 200)
}

function drawSketch1() {
  canvas1.background(255, 0, 0)
  canvas1.ellipse(100, 100, 50, 50)
  image(canvas1, 0, 0)
}

// Вызов setup для инициализации
setupSketch1()

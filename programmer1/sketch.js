let x, y

function setup() {
  let canvas = createCanvas(400, 400)
  canvas.parent('sketch1-container')
  x = random(width)
  y = random(height)
}

function draw() {
  fill(255, 0, 0)
  ellipse(x, y, 50, 50)
  x = (x + 1) % width
  y = (y + 1) % height
}

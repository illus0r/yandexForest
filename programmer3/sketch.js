let x, y

function setup() {
  let canvas = createCanvas(400, 400)
  x = random(width)
  y = random(height)
}

function draw() {
  fill(0, 0, 255)
  ellipse(x, y, 50, 50)
  x = (x + 1) % width
  y = (y + 1) % height
}

let circles = []
const maxCircles = 1000
let startColors

function setup() {
  createCanvas(450, 800)
  colorMode(RGB, 255)

  startColors = [
    color(233, 30, 99), // Pink
    color(33, 150, 243), // Blue
    color(255, 193, 7), // Amber
  ]
  background(random(startColors))
  textSize(40)
  textStyle(BOLD)
  text('cheerful_parakeet', 20, 70)

  circles.push(new Circle(width / 2, height, 100, startColors[0]))
}

function draw() {
  for (let i = circles.length - 1; i >= 0; i--) {
    circles[i].update()
    circles[i].display()

    if (circles[i].shouldSplit() && circles.length < maxCircles) {
      circles.push(...circles[i].split())
    }

    if (circles[i].isDead()) {
      circles.splice(i, 1)
    }
  }
}

class Circle {
  constructor(x, y, size, col, angle = -HALF_PI, speed = 2) {
    this.pos = createVector(x, y)
    this.vel = p5.Vector.fromAngle(angle, speed)
    this.size = size
    this.lifespan = 255
    this.splitCount = 0
    this.color = col
    this.targetColor = random(startColors)
    this.wobble = random(0.05, 0.1)
    this.noiseOffsetX = random(1000)
    this.noiseOffsetY = random(1000)
  }

  update() {
    let n = map(
      noise(this.pos.x * 0.01, this.pos.y * 0.01),
      0,
      1,
      -PI / 6,
      PI / 6,
    )
    this.vel.rotate(n * this.wobble)

    this.pos.add(this.vel)
    this.lifespan -= 0.5
    this.size *= 0.997

    // Smooth color transition
    this.color = lerpColor(this.color, this.targetColor, 0.05)
    if (random() < 0.01) {
      this.targetColor = random(startColors)
    }
  }

  display() {
    noStroke()
    fill(this.color)
    ellipse(this.pos.x, this.pos.y, this.size)
  }

  shouldSplit() {
    return random() < 0.02 && this.splitCount < 8 && this.size > 1
  }

  split() {
    this.splitCount++
    let newSize = this.size * 0.5
    let angle1 = this.vel.heading() - PI / 6 + random(-PI / 12, PI / 12)
    let angle2 = this.vel.heading() + PI / 6 + random(-PI / 12, PI / 12)
    return [
      new Circle(
        this.pos.x,
        this.pos.y,
        newSize,
        this.color,
        angle1,
        this.vel.mag(),
      ),
      new Circle(
        this.pos.x,
        this.pos.y,
        newSize,
        this.color,
        angle2,
        this.vel.mag(),
      ),
    ]
  }

  isDead() {
    return (
      this.lifespan <= 0 ||
      this.pos.y < 0 ||
      this.pos.x < 0 ||
      this.pos.x > width ||
      this.size < 10
    )
  }
}

function mouseClicked() {
  save()
}

const body = document.querySelector('body')

for (let i = 1; i <= 2; i++) {
  const container = document.createElement('div')
  container.id = `sketch${i}-container`
  document.body.appendChild(container)

  // Создаем новый экземпляр p5 и привязываем его к текущему контейнеру
  new p5(p => {
    p.setup = function () {
      let canvas = p.createCanvas(200, 400)
      canvas.parent(`sketch${i}-container`)
      p.x = p.random(p.width)
      p.y = p.random(p.height)
    }

    p.draw = function () {
      p.fill(255, 0, 0)
      p.ellipse(p.x, p.y, 50, 20)
      p.x = (p.x + 1) % p.width
      p.y = (p.y + 1) % p.height
    }
  })
}

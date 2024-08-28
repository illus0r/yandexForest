// let sketches = []

// function preload() {
//   // Загрузка всех скетчей
//   for (let i = 1; i <= 100; i++) {
//     loadScript(`programmer${i}/sketch.js`)
//   }
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight)

//   // Инициализация всех скетчей
//   for (let i = 0; i <= 3; i++) {
//     if (window[`programmer${i}Sketch`]) {
//       let sketchInstance = new p5(window[`programmer${i}Sketch`])
//       sketches.push(sketchInstance)

//       // Вызываем setup для каждого скетча
//       if (sketchInstance.setup) {
//         sketchInstance.setup()
//       }
//     }
//   }
// }

// function draw() {
//   background(20)

//   // Обновление и отрисовка всех скетчей
//   for (let sketch of sketches) {
//     console.log('sketch:', sketch)
//     if (sketch.draw) {
//       push()
//       sketch.draw()
//       pop()
//     }
//   }
// }

// // Вспомогательная функция для загрузки скриптов
// function loadScript(url) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script')
//     script.src = url
//     script.onload = resolve
//     script.onerror = reject
//     document.head.appendChild(script)
//   })
// }

// window.addEventListener('load', () => {
const body = document.querySelector('body')

const container1 = document.createElement('div')
container1.id = 'sketch1-container'
body.appendChild(container1)
debugger
// })

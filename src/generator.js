const names = require('./names')
const fs = require('fs')
const path = require('path')

fs.rmSync(path.join(__dirname, '..', 'build'), {recursive: true})
fs.mkdirSync(path.join(__dirname, '..', 'build'), {recursive: true})

fs.copyFileSync(
  path.join(__dirname, 'index.html'),
  path.join(__dirname, '..', 'build', 'index.html'),
)
fs.copyFileSync(
  path.join(__dirname, 'style.css'),
  path.join(__dirname, '..', 'build', 'style.css'),
)
fs.copyFileSync(
  path.join(__dirname, 'index.js'),
  path.join(__dirname, '..', 'build', 'index.js'),
)
fs.copyFileSync(
  path.join(__dirname, 'names.js'),
  path.join(__dirname, '..', 'build', 'names.js'),
)
modifyNamesJs(path.join(__dirname, '..', 'build', 'names.js'))

names.forEach(function (name) {
  // Define the target directory
  const targetDir = path.join(__dirname, '..', 'build', name)

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, {recursive: true})
  }

  fs.copyFileSync(
    path.join(__dirname, '..', 'template', 'index.html'),
    path.join(targetDir, 'index.html'),
  )
  fs.copyFileSync(
    path.join(__dirname, '..', 'template', 'sketch.js'),
    path.join(targetDir, 'sketch.js'),
  )
  modifySketchJs(path.join(targetDir, 'sketch.js'), name)
})

function modifyNamesJs(filePath) {
  const data = fs.readFileSync(filePath, 'utf8').split('\n')
  data[0] = 'export ' + data[0]
  data.pop()
  data.pop()
  fs.writeFileSync(filePath, data.join('\n'), 'utf8')
}

function modifySketchJs(filePath, name) {
  let data = fs.readFileSync(filePath, 'utf8')
  data = data.replace('PLACEHOLDER', name)
  fs.writeFileSync(filePath, data, 'utf8')
}

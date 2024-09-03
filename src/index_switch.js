// старая версия скрипта, тут айфреймы переключаются один за одним

let iframes = []
const delay = 2000
import {names} from './names.js'
let srcs = names.map(name => `./${name}/index.html`)

function createIframe(src) {
  var iframe = document.createElement('iframe')
  iframe.src = src
  return iframe
}
window.onload = function () {
  srcs.forEach(function (src) {
    let fr = createIframe(src)
    fr.setAttribute('width', '100%')
    fr.setAttribute('height', '1000px')
    iframes.push(fr)
  })
  animate()
}

let current = 0
function animate() {
  document.querySelectorAll('iframe').forEach(function (iframe) {
    iframe.parentNode.removeChild(iframe)
  })
  current = (current + 1) % iframes.length
  document.body.appendChild(iframes[current])
  setTimeout(animate, delay)
}

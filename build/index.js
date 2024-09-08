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
    // fr.setAttribute('width', '100%')
    // fr.setAttribute('height', '1000px')
    document.body.appendChild(fr)
    iframes.push(fr)
  })
  animate()
}

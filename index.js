let iframes = []
const delay = 10000
let srcs = [
  'programmer1/index.html',
  'programmer2/index.html',
  'programmer3/index.html',
]
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

var prefix = ''

if (angular.isFunction(window.webkitConvertPointFromNodeToPage)) {
  // this is webkit (really it is)
  // console.log("webkit")
  var el = document.documentElement || document.createElement('div')
  prefix = (el.style.animation !== null) ? '' : '-webkit-'
  prefix = '-webkit-'
}

module.exports = prefix

var getStyles = require('./get-styles')
var prefix = require('./prefix')

function getLine(percentage, styles) {
  if (angular.isNumber(percentage)) {
    percentage += '%'
  } else if (angular.isString(percentage) && percentage.indexOf('%') === -1) {
    percentage += '%'
  }
  return percentage + '{' + getStyles(styles) + '}'
}

module.exports = function (name, positions) {
  var buf = '@' + prefix + 'keyframes ' + name + '{' 
  if (angular.isArray(positions)) {
    buf += positions.map(function (pos, index) {
      var percentage

      if (index) {
        percentage = (index / (positions.length - 1)) * 100
      } else {
        percentage = 0
      }

      return getLine(percentage, pos)
    }).join('')
  } else {
    for (var key in positions) {
      buf += getLine(key, positions[key])
    }
  }
  
  buf += '}'

  // console.log("animation", buf);
  
  return buf
}

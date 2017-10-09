var createCssTranslateString = require('./create-css-translate-string')
var prefix = require('./prefix')
var addUnit = require('./add-unit')

var lookups = {
  scale: function (val) {
    return 'scale(' + val + ')'
  },
  rotate: function (val) {
    return 'rotate(' + addUnit(val, 'deg') + ')'
  },
  rotateX: function (val) {
    return 'rotateX(' + addUnit(val, 'deg') + ')'
  },
  rotateY: function (val) {
    return 'rotateY(' + addUnit(val, 'deg') + ')'
  },
  skew: function (val) {
    return 'skew(' + addUnit(val[0], 'deg') + ',' + addUnit(val[1], 'deg') + ')'
  },
  translate: function (val) {
    return createCssTranslateString(val)
  },
  transform: function (val) {
    return val
  }
}

var otherLookups = {
  perspective: function (val) {
    return addUnit(val, 'px');
  },
  'perspective-origin': function (val) {
    return addUnit(val[0], '%') + ' ' + addUnit(val[1], '%')
  }
}

function getStyles(obj) {
  // array of values is assumed to be [x,y,(z)]
  if (angular.isArray(obj)) {
    return prefix + 'transform:' + createCssTranslateString(obj)
  }

  var transformBuff = []
  var otherStyles = []

  // object assumes
  if (angular.isObject(obj)) {

    for (var key in obj) {
      if (lookups[key]) {
        transformBuff.push(lookups[key](obj[key]))
      } else {
        if (otherLookups[key]) {
          otherStyles.push(prefix + key + ':' + otherLookups[key](obj[key]))
        } else {
          otherStyles.push(prefix + key + ':' + obj[key])
        }
      }
    }
  }

  otherStyles.push(prefix + 'transform:' + transformBuff.join(''))

  return otherStyles.join(';')
}

module.exports = getStyles;

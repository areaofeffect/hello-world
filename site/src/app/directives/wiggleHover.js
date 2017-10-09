var animations = require('../../keyframe_anims');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateWiggle(numFrames, rRange, sRangeX, sRangeY, pRangeMin, pRangeMax, num) {

  var frames = [];
  while (frames.length < numFrames) {
    frames.push({});
  }

  frames = frames.map(function (frame, i) {
    var rotateX = 0
    var rotateY = 0
    var skewX = 0
    var skewY = 0
    var perspective = 0
    var perspectiveOriginX = 0
    var perspectiveOriginY = 0
    var translate = [0, 0, 0]
    var scale = 1

    while (i < frames.length) {
      rotateX = getRandomInt(-rRange, rRange)
      rotateY = getRandomInt(-rRange, rRange)
      skewX = getRandomInt(-sRangeX, sRangeX)
      skewY = getRandomInt(-sRangeY, sRangeY)
      perspective = getRandomInt(pRangeMin, pRangeMax)
      translate = [0, 0, num * 25]
      if (num === 2) {
        scale = [0.99, 0.99]
      } else {
        scale = [1.05, 1.05]
      }
      perspectiveOriginX = getRandomInt(0, 100)
      perspectiveOriginY = getRandomInt(0, 100)
      i++
    }
    // console.log('translate', translate);
    return {
      rotateX: rotateX,
      rotateY: rotateY,
      skew: [skewX, skewY],
      perspective: perspective,
      translate: translate,
      scale: scale,
      'perspective-origin': [perspectiveOriginX, perspectiveOriginY]
    }
  })

  return frames
}

function createWiggle(num, path, numFrames, rRange, sRangeX, sRangeY, pRangeMin, pRangeMax, duration) {
  animations.registerAnimation({
    name: 'wiggle' + num,
    // the actual array of animation changes
    animation: generateWiggle(numFrames, rRange, sRangeX, sRangeY, pRangeMin, pRangeMax, num),
    // optional presets for when actually running the animation
    presets: {
      duration: duration,
      easing: 'linear',
      delay: 0
    }
  });
}

function doMouseEnter(el, colors, isLogo, path) {
  // console.log("doMouseEnter", path);
  if (el) {
    angular.element(el).addClass('white');
  }
  angular.forEach(colors, function (color, i) {

    if (!angular.element(color).hasClass('extra-room')) {
      var value = 'wiggle' + i;
      // $log.info(color, value);
      angular.element(color).addClass('shown');
      if (!isLogo) {
        angular.element(color).addClass('shift-left');
      }
      if (!animations.hasAnimation(value)) {
        switch (i) {
          case 0:
            // num, numFrames, rRange, sRangeX, sRangeY, pRangeMin, pRangeMax, duration
            createWiggle(i, path, 8, 5, 5, 10, 0, 500, 3000);
            break;
          case 1:
            createWiggle(i, path, 8, 4, 4, 5, 700, 1200, 2500);
            break;
          case 2:
            createWiggle(i, path, 5, 1, 1, 2, 1300, 1800, 2000);
            break;
          default:
            break;
        }
      }
      animations.runAnimation(angular.element(color), value);
    }
    
  });
}

/** @ngInject */
function wiggleHover($log, $timeout, $location) {
  return {
    restrict: 'EA',
    link: function (scope, element, attrs) {
      // $log.info(element, "yo", $location.path(), attrs.path);

      var isLogo = false;
      var isNav = false;

      var el = null;
      if (attrs.class === "helloworld") {
        isLogo = true;
      }

      // don't do it for the log0
      if (!isLogo) {
        // get width of text
        el = element.find('span');
        $timeout(function () {
          if (el.length > 0) {
            element.css({
              width: el[0].offsetWidth + 10 + 'px',
              height: el[0].offsetHeight + 5 + 'px'
            });
          }
        }, 0);
      }
      // console.log("$location.path()", $location.path());
      if ($location.path() === "/" || $location.path() === "/team" || $location.path() === "/workshops") {
        isNav = true;
      }
      
      var divs = element.find('div');
      var colors = [];

      for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        if (angular.element(div).hasClass('color-1') || angular.element(div).hasClass('color-2') || angular.element(div).hasClass('color-3')) {
          colors.push(div);
        }
      }
      
      if ($location.path() === attrs.path) {
        // console.log("auto highlight");
        doMouseEnter(el, colors, isLogo, attrs.path.substr(0));
      }

      if (isLogo) {
        // if ($location.path().indexOf('projects') > -1) {
        doMouseEnter(el, colors, isLogo);
        // }
        return;
      }

      // $log.info("colors", colors);
  
      element.on('mouseenter', function () {
        // $log.info("mouseenter", el);

        if (!!('ontouchstart' in window)) { // check for touch device
          // behaviour and events for touch device
        } else {
          doMouseEnter(el, colors, isLogo, attrs.path.substr(0));
        }
      
      });

      element.on('mouseleave', function () {
        // TODO: there's some weird white flash
        // console.log('mouseleave', angular.element(element).parent().hasClass('active'), angular.element(element).parent());

        if (angular.element(element).parent().hasClass('active')) {
          return;
        }

        if (el) {
          angular.element(el).removeClass('white');
        }

        angular.forEach(colors, function (color, i) {
          var value = attrs.path.substr(0) + 'wiggle' + i;
          angular.element(color).removeAttr('style');
          angular.element(color).removeClass('shown');
          angular.element(color).removeClass('shift-left');
          animations.unregisterAnimation(value);
        });
      });
    }
  };
}

module.exports = wiggleHover;


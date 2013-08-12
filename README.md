## sioux-global

More info from sioux: [gerhardberger.github.io/sioux/](http://gerhardberger.github.io/sioux/)

The collection of basic features that are important and useful for working with the other parts of the `sioux` project. It is optional to make it global, but it is recommended. The features listed after, are basically just shorthands to the DOM ones.

``` js
var $ = require('sioux-global');
// window.$ = $;

console.log($.isTouchDevice);

$('button')
  .on('tap', function () {
    console.log('tapped!');
  })
  .on('touchleave', function (event) {
    console.log('left!');
  })
  .css('color', 'red')
  .css({
    'border-radius': '5px'
    , 'border': '1px solid red'
  });
```

#### $(selectorText, parentElement<optional>)
matches the elements with the `selectorText`, if `parentElement` defined it will query in it

#### on(eventName, handler)
adds an event handler to the matched elements

#### off(eventName, handler)
removes the event handler from the matched elements

#### css(obj)
pretty much same as in jquery
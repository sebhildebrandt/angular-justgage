angular-justgage
================

angulat-justgage is a angular wrapper (directive) for the [JustGage](http://justgage.com/) chart library - Version 0.0.4 - (MIT-license)

## Installation

First install the required libraries (angular, rapael & justgage).

```
# bower install
```

This will now install the latest version of justgage (unlike version 0.0.2 where there was no official justgage bower package).


## Usage

#### HTML-Part

```html
<!DOCTYPE html>
<html ng-app="app">
<head>
    <script src="../components/angular/angular.min.js"></script>
    <script src="../components/raphael/raphael-min.js"></script>
    <script src="../components/justgage-official/justgage.js"></script>
    <script src="../ng-justgage.js"></script>
    <script src="../app.js"></script>
</head>
<body ng-controller="myController">
    <just-gage id="test1" min=0 max=100 value="myvalue" title="Test 1"></just-gage>
</body>
</html>
```

where ```myvalue``` is the scope-variable that you dynamically can change. ```just-gage``` can also be applied as an attribute of a ```div``` or other element, in cases where that may be important for layout:

```html
  ...
  <div just-gage id="test1" min=0 max=100 value="myvalue" title="Test 1"></div>
  ...
```

#### JS-Part (app.js)

```js
angular.module('app', ['charts.ng.justgage']).controller('myController', function($scope) {
    // set initial value for the gauge
    $scope.myvalue = 50;

    // change value randomly each second
    setInterval(function(){
        $scope.$apply(function() {
            $scope.myvalue = getRandomInt(10, 90);
        });
    }, 1000);
});
```

## Attributes

I tried to wire the most important options for justgage to attributes:

All justgage-options that use camel case names need to be translated to dash-delimited attributes:

justgage-option | attribute | description | example
---|---|---|---
min|min|min value|min=0
max|max|max value|max=100
title|title|Gauge title|title="Temperature"
width|width|fixed width (optional)|width=100
height|height|fixed height (optional)|height=100
value|value|Value of the gauge|value=42 - if you use a scope variable, then: value="valiable"
donut|donut|show a full donut?|donut=false
titleFontColor|title-font-color|color of title|title-font-color="#999"
valueFontColor|value-font-color|color of value label|value-font-color="#333"
labelFontColor|label-font-color|color of labels|label-font-color="#666"
decimals|decimals|number of decimals to display|decimals=0
gaugeWidthScale|gauge-width-scale|thickness of gauge|gauge-width-scale=0.1 (for thin gauge)
gaugeColor|gauge-color|color of gauge|gauge-color=#ff0000
label|label|label|label="My Label"
symbol|symbol|symbol next to value (suffix)|symbol="%"
donutStartAngle|donut-start-angle|start angle of gauge for donuts|donut-start-angle=90
relativeGaugeSize|relative-gauge-size|if you like to habe dynamic resizing|relative-gauge-size=true
valueMinFontSize|value-min-font-size|relative font size for value|value-min-font-size=16
titleMinFontSize|title-min-font-size|relative font size for title|title-min-font-size=16
labelMinFontSize|lable-min-font-size|relative font size for label|label-min-font-size=10
hideValue|hide-value|hide value label|hide-value=true
hideMinMax|hide-min-max|hide min-max label|hide-min-max=true

## Special attributes

customSectors is a special attribute, because this would require an array ... so I came up wih this solution:

To use e.g. this justgage custom sectors:

```
	[{
      color : "#ff0000",
      lo : 0,
      hi : 25
    },{
      color : "#00ff00",
      lo : 25,
      hi : 50
    }, {
      color : "#0000ff",
      lo : 50,
      hi : 100
    }]
```

you need to transfor it to a string like the following:

```
custom-sectors="0-25-#ff0000 25-50-#00ff00 50-100-#0000ff"
```

Hope, this example makes it clear ;-)

## Demo

in the demo directory you have a simple app, that demonstrates 6 responsive charts with different options. Just try it.

## Version history

| Version        | Date           | Comment  |
| -------------- | -------------- | -------- |
| 0.0.4          | 2014-09-15     | Updated Doc, improved demo |
| 0.0.3          | 2014-09-15     | Merged pull requests - thanx, [idpaterson](https://github.com/idpaterson). Updated Doc|
| 0.0.2          | 2014-03-14     | added attributes 'symbol', 'hideValue', 'hideMinMax'. Improvements and bug-fixes. |
| 0.0.1          | 2014-03-11     | initial release |

## Comments

If you have ideas or comments, please do not hesitate to contact me.

Sincerely,

Sebastian Hildebrandt, [+innovations](http://www.plus-innovations.com)

## Credits

Written by Sebastian Hildebrandt [sebhildebrandt](https://github.com/sebhildebrandt)

Contributers:
[idpaterson](https://github.com/idpaterson)

## License [![MIT license][license-img]][license-url]

>The [`MIT`][license-url] License (MIT)
>
>Copyright &copy; 2014-2015 Sebastian Hildebrandt, [+innovations](http://www.plus-innovations.com).
>
>Permission is hereby granted, free of charge, to any person obtaining a copy
>of this software and associated documentation files (the "Software"), to deal
>in the Software without restriction, including without limitation the rights
>to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
>copies of the Software, and to permit persons to whom the Software is
>furnished to do so, subject to the following conditions:
>
>The above copyright notice and this permission notice shall be included in
>all copies or substantial portions of the Software.
>
>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
>IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
>FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
>LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
>OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
>THE SOFTWARE.

[license-url]: https://github.com/sebhildebrandt/angular-justgage/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square

# svg-line-segments

turn a [linearized svg](https://npmjs.org/package/svg-linearize)
into an array of paths of `[x,y]` pairs

# example

``` js
var segments = require('svg-line-segments');
var linearize = require('svg-linearize');
var loadsvg = require('load-svg');

loadsvg('face.svg', function (err, svg) {
    var points = segments(linearize(svg));
    document.body.innerText = JSON.stringify(points);
});
```

Compile with browserify and serve up the bundle in a directory with a `face.svg`
file:

```
$ beefy points.js
```

# methods

``` js
var segments = require('svg-line-segments')
```

## var points = segments(svg)

Given a linearized svg image with paths that only contain `M` and `L` commands,
return an array arrays of `points` for each `<path>` in the svg or `null` if
the svg isn't linearized.

You can linearize an svg with
[svg-linearize](https://npmjs.org/package/svg-linearize).

# install

With [npm](https://npmjs.org) do:

```
npm install svg-line-segments
```

# license

MIT

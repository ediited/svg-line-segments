var segments = require('../');
var linearize = require('svg-linearize');
var loadsvg = require('load-svg');

loadsvg('face.svg', function (err, svg) {
    var points = segments(linearize(svg));
    document.body.innerText = JSON.stringify(points);
});

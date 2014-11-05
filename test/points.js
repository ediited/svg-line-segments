var test = require('tape');
var segments = require('../');
var linearize = require('svg-linearize');
var fs = require('fs');
var src = fs.readFileSync(__dirname + '/files/face.svg', 'utf8');
var expected = require('./files/face.json');

test('points', function (t) {
    t.plan(1);
    var div = document.createElement('div');
    div.innerHTML = src;
    
    var svg = div.querySelector('svg');
    var points = segments(linearize(svg));
    t.deepEqual(points, expected);
});

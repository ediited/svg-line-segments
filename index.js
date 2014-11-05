var parse = require('parse-svg-path');

module.exports = function (svg) {
    var paths = svg.querySelectorAll('path');
    var points = [];
    
    for (var i = 0; i < paths.length; i++) {
        var cmds = parse(paths[i].getAttribute('d'));
        var pts = [];
        for (var j = 0; j < cmds.length; j++) {
            var c = cmds[j];
            if (c[0] === 'M' || c[0] === 'L') {
                pts.push(c.slice(1));
            }
            else return null;
        }
        points.push(pts);
    }
    return points;
};

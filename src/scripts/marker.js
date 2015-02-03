(function () {
    'use strict';

    var shapes = {
        'circle': function (data, layer, options) {
            var projection = options.map.projection;
            return layer.append('circle')
                .attr('cx', function (d) { return projection(d)[0]; })
                .attr('cy', function (d) { return projection(d)[1]; })
                .attr('r', (options.marker.size / 2) + 'px')
                .attr('fill', options.marker.fill);
        },

        'triangle': function (data, layer, options) {
            var projection = options.map.projection;
            var size = options.marker.size;
            var points = [-0.5,0, 0,-1, 0.5,0].map(function (p) { return p * size; }).join(' ');

            return layer.append('polyline')
                .attr('transform', function (d) {
                    var proj = projection(d);
                    return 'translate(' + proj[0] + ',' + proj[1] + ')';
                })
                .attr('points', points)
                .attr('fill', options.marker.fill);

        }
    };

    var defaults = {
        marker: {
            // size of the marker (it may mean different things for different shapes)
            size: 10,

            // shape of the marker
            shape: shapes.circle,

            // a class name or function that returns a class name to be set onto each feature
            cssClass: undefined,

            fill: undefined
        }
    };

    function render(data, layer, options) {

        var shapeRenderer = typeof options.marker.shape === 'string' ? shapes[options.marker.shape] : options.marker.shape;

        // add shape to layer
        var sel = layer.selectAll('.geo-marker')
            .data(data);

        var cssFn = function (add) {
            return function () {
                var extraClasses = (typeof add === 'function' ? add.call() : add ? add : '');
                return 'geo-marker ' +  extraClasses;
            };
        };

        sel.enter()
            .call(_.partialRight(_.partial(shapeRenderer, data), options));

        sel.attr('class', cssFn(options.marker.cssClass));

        sel.exit()
            .remove();
    }

    render.defaults = defaults;

    render.shapes = shapes;

    Contour.export('marker', render);

})();
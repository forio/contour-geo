import Contour from 'contour';

const shapes = {
    circle: function (data, layer, options) {
        const projection = options.map.projection;
        return layer.append('circle')
            .attr('cx', function (d) { return projection(d)[0]; })
            .attr('cy', function (d) { return projection(d)[1]; })
            .attr('r', (options.marker.size / 2) + 'px')
            .attr('fill', options.marker.fill);
    },

    triangle: function (data, layer, options) {
        const projection = options.map.projection;
        const size = options.marker.size;
        const points = [-0.5,0, 0,-1, 0.5,0].map(function (p) { return p * size; }).join(' ');

        return layer.append('polyline')
            .attr('transform', function (d) {
                const proj = projection(d);
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
        return function (d, i, j) {
            var extraClasses = (typeof add === 'function' ? add.call(this, d, i, j) : add ? add : '');
            return 'geo-marker ' +  extraClasses;
        };
    };

    sel.enter()
        .call(Contour.utils.partialRight(Contour.utils.partial(shapeRenderer, data), options));

    sel.attr('class', cssFn(options.marker.cssClass));

    sel.exit()
        .remove();
}

render.defaults = defaults;

render.shapes = shapes;

/**
* Adds one or more marker visualizations to the Contour instance. Markers allow you to add small shapes (circles or triangles) to your map, for example to indicate features of interest.
*
* The first argument to the visualization is an array of [longitude, latitude] pairs where the markers should appear.
*
* Longitude and latitude are specified in degrees.
*
* * Longitude is positive for East, negative for West.
* * Latitude is positive for North, negative for South.
*
* This visualization requires the [`.geo()`](#geo) frame.
*
* To override any of the default configuration options in a maker, include the `marker` configuration object in the configuration options that you pass to your Contour constructor, or in the configuration object passed to the particular marker visualization.
*
* ### Example:
*
*       d3.json('us-states.json', function (mapUnit) {
*           new Contour({
*                   el: '.map',
*                   marker: {
*                       fill: '#0000ff'
*                   }
*               })
*               .geo()
*               .USMap(mapUnit)
*               .marker([[-122, 37], [-87, 41]], {shape: 'circle'})
*               .marker([[-120, 39]], {shape: 'triangle'})
*               .render();
*       });
*
*
* @name marker(data, options)
* @param {object} data The data (coordinates) describing where to render with this visualization on the `.map()`.
* @param {object} options (Optional) Configuration options particular to this visualization that override the defaults.
*/

Contour.export('marker', render);

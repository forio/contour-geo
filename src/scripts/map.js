import Contour from 'contour';
import d3 from 'd3';

var defaults = {
    map: {
        // topoJson feature to render as a map (will acccess topoJson.objects[options.feature])
        feature: 'all',
        // scale to be used by the projection,
        // if left undefined, scale will be chart.plotWidth * scaleRatio
        scale: undefined,
        // a nice scale ratio
        scaleRatio: 1.3333,
        // valid options are at https://github.com/mbostock/d3/wiki/Geo-Projections
        projection: d3.geo.mercator(),
        // array of [longitute, latitude]
        center: undefined,
        // d3.geo.projection.precision()
        precision: 0.1,
        // translates the pixel coordinates of center based on array of [x, y]
        translation: undefined,
        // a class name or function that returns a class name to be set onto each feature
        cssClass: undefined,
        // a color (hex) or function that returns a color to be set onto each feature
        fill: undefined
    }
};


/**
* Adds a map visualization to the Contour instance.
*
* This visualization requires the [`.geo()`](#geo) frame.
*
* Map visualizations require a TopoJSON file with the topology to draw. Because of this, typically map visualizations are created as part of a callback function passed to a `d3.json()` call that parses the TopoJSON file.
*
* When you [download Contour-Geo](get_contour.html), a few TopoJSON files are included. You can also [create your own](#topojson).
*
* ### Example:
*
*       d3.json('us-states.json', function (us) {
*           new Contour({
*                   el: '.map',
*                   map: {
*                       projection: d3.geo.albersUsa()
*                   }
*               })
*               .geo()
*               .map(us)
*               .render();
*       });
*
*
* @name map(data, options)
* @param {object} data The data (topology) to be rendered with this visualization. This must be in TopoJSON format.
* @param {object} options (Optional) Configuration options particular to this visualization that override the defaults.
*/
function map(data, layer, options) {
    const noop = function () {};
    const isFunction = function (f) { return '[Object function]' === Object.prototype.toString(f); }
    const width = options.chart.plotWidth;
    const height = options.chart.plotHeight;
    const opt = options.map || {};
    const us = data;
    const fillFn = !opt.fill ? noop : isFunction(opt.fill) ? opt.fill : function () { return opt.fill; };
    const classFn = !opt.cssClass ? noop : isFunction(opt.cssClass) ? opt.cssClass : function () { return opt.cssClass; };
    const scaleRatio = options.map.scaleRatio;


    var projection = options.map.projection
        .scale(options.map.scale || width * scaleRatio)
        .translate(options.map.translation || [width / 2, height / 2])
        .precision(options.map.precision);

    if (projection.center) {
        projection.center(options.map.center || [0,0]);
    }

    var path = d3.geo.path()
        .projection(projection);

    var g = layer;

    g.append('g').attr('id', options.map.feature)
        .selectAll('path')
            .data(topojson.feature(us, us.objects[options.map.feature]).features)
        .enter().append('path')
            .attr('id', function (d) { return d.id; })
            .attr('class', function(d) { return 'tooltip-tracker state ' + classFn(d); })
            .attr('fill', fillFn)
            .attr('d', path);

    g.append('path')
        .datum(topojson.mesh(us, us.objects[options.map.feature]), function(a, b) { return a !== b; })
        .attr('id', 'state-borders')
        .attr('d', path);
}

map.defaults = defaults;

Contour.export('map', map);

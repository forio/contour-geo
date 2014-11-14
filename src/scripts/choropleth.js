(function () {
    'use strict';

    var defaults = {
        choropleth: {
            // topoJson feature to render as a map (will acccess topoJson.objects[options.feature])
            feature: '',
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
    * Adds a choropleth map visualization to the Contour instance. Default configuration options are designed for a US map with an Albers USA projection.
    *
    * Choropleth visualizations require a TopoJSON file with the topology to draw. Because of this, typically choropleth visualizations are created as part of a callback function passed to a `d3.json()` call that parses the TopoJSON file.
    *
    * When you [download Contour-Geo](get_contour.html), a few TopoJSON files are included. You can also [create your own](#topojosn).
    *
    * ### Example:
    *
    *       d3.json('us-states.json', function (us) {
    *           new Contour({
    *                   el: '.map',
    *                   choropleth: {
    *                       projection: d3.geo.albers()
    *                   }
    *               })
    *               .choropleth(us)
    *               .render();
    *       });
    *
    *
    * @name choropleth(data, options)
    * @param {object} data The data (topology) to be rendered with this visualization. This must be in TopoJSON format.
    * @param {object} options (Optional) Configuration options particular to this visualization that override the defaults.
    */
    function choropleth(data, layer, options) {
        var width = options.chart.plotWidth;
        var height = options.chart.plotHeight;
        var opt = options.choropleth || {};
        var us = data;
        var fillFn = !opt.fill ? _.noop : _.isFunction(opt.fill) ? opt.fill : function () { return opt.fill; };
        var classFn = !opt.cssClass ? _.noop : _.isFunction(opt.cssClass) ? opt.cssClass : function () { return opt.cssClass; };
        var scaleRatio = options.choropleth.scaleRatio;


        var projection = options.choropleth.projection
            .scale(options.choropleth.scale || width * scaleRatio)
            .translate(options.choropleth.translation || [width / 2, height / 2])
            .precision(options.choropleth.precision);

        if (projection.center) {
            projection.center(options.choropleth.center || [0,0]);
        }

        var path = d3.geo.path()
            .projection(projection);

        var g = layer;

        g.append('g').attr('id', options.choropleth.feature)
            .selectAll('path')
                .data(topojson.feature(us, us.objects[options.choropleth.feature]).features)
            .enter().append('path')
                .attr('id', function (d) { return d.id; })
                .attr('class', function(d) { return 'tooltip-tracker state ' + classFn(d); })
                .attr('fill', fillFn)
                .attr('d', path);

        g.append('path')
            .datum(topojson.mesh(us, us.objects[options.choropleth.feature]), function(a, b) { return a !== b; })
            .attr('id', 'state-borders')
            .attr('d', path);
    }

    choropleth.defaults = defaults;

    Contour.export('choropleth', choropleth);
})();

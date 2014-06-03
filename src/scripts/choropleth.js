(function () {
    'use strict';

    var defaults = {
        USChoropleth: {
            // the data set in topoJson format
            topoJson: undefined,
            // topoJson feature to render as a map (will acccess topoJson.objects[options.feature])
            feature: 'states',
            // scale to be used by the projection, if left undefined
            // scale will be chart.plotWidth * scaleRatio
            scale: undefined,
            // a nice scale ratio for US Map with albersUsa projection
            scaleRatio: 1.3333,
        }
    };


    /**
    * Create a Choropleth map visualization
    *
    * ### Example:
    *       var cssClassByState = { 'CA': 'range-1', 'AZ': 'range-2' .... }
    *       d3.json('us-states.json', function (us) {
    *       new Contour({ el: '.map' })
    *           .choropleth({
    *               topoJson: us,
    *               cssClass: function (d) { return cssClassByState[d.id]; }
    *           })
    *           .tooltip()
    *           .render()
    *
    *       });
    *
    *
    * @function choropleth
    */
    function choropleth(data, layer, options) {
        var width = options.chart.plotWidth;
        var height = options.chart.plotHeight;
        var us = data.topoJson;
        var fillFn = !data.fill ? _.noop : _.isFunction(data.fill) ? data.fill : function () { return data.fill; };
        var classFn = !data.cssClass ? _.noop : _.isFunction(data.cssClass) ? data.cssClass : function () { return data.cssClass; };
        var scaleRatio = options.USChoropleth.scaleRatio;

        var projection = d3.geo.albersUsa()
            .scale(options.USChoropleth.scale || width * scaleRatio)
            .translate([width / 2, height / 2]);

        var path = d3.geo.path()
            .projection(projection);

        var g = layer;

        g.append('g').attr('id', 'states')
            .selectAll('path')
                .data(topojson.feature(us, us.objects[options.USChoropleth.feature]).features)
            .enter().append('path')
                .attr('id', function (d) { return d.id; })
                .attr('class', function(d) { return 'tooltip-tracker ' + classFn(d); })
                .attr('fill', fillFn)
                .attr('d', path);

        g.append('path')
            .datum(topojson.mesh(us, us.objects[options.USChoropleth.feature]), function(a, b) { return a !== b; })
            .attr('id', 'state-borders')
            .attr('d', path);
    }

    choropleth.defaults = defaults;

    Contour.export('USChoropleth', choropleth);
})();

(function () {
    'use strict';

    var defaults = {
        USChoropleth: {
            scale: undefined,
            scaleRatio: 1.3333,
            feature: 'states',
            classFn: function () {},
            fillFn: function () {}
        }
    };

    function choropleth(data, layer, options) {
        var width = options.chart.plotWidth;
        var height = options.chart.plotHeight;
        var us = data.topoJson;
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
                .attr('class', function(d) { return 'tooltip-tracker ' + options.USChoropleth.classFn(d); })
                .attr('fill', options.USChoropleth.fillFn)
                .attr('d', path);

        g.append('path')
            .datum(topojson.mesh(us, us.objects[options.USChoropleth.feature]), function(a, b) { return a !== b; })
            .attr('id', 'state-borders')
            .attr('d', path);
    }

    choropleth.defaults = defaults;

    Contour.export('USChoropleth', choropleth);
})();

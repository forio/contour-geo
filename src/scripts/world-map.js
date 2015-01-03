(function () {
    'use strict';

    var renderer = function (data, layer, options) {
        this.ensureDefaults(options, 'choropleth');

        var w = options.chart.plotWidth;
        var h = options.chart.plotHeight;

        // use miller projection if its available.
        // needs to include <script src="http://d3js.org/d3.geo.projection.v0.min.js" charset="utf-8"></script>
        // https://github.com/d3/d3-geo-projection
        options.choropleth = options.choropleth || {};
        _.merge(options.choropleth, {
            feature: 'all',
            projection: (d3.geo.miller || d3.geo.equirectangular)(),
            scale: (w + 1) / 2 / Math.PI,
            precision: 0.1,
            translation: [w/2, h/2]
        }, options.worldChoropleth);

        return this.choropleth.renderer.call(this, data, layer, options);
    };


    Contour.export('worldMap', renderer);
})();

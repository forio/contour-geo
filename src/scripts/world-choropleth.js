(function () {
    'use strict';

    var renderer = function (data, layer, options) {
        this.ensureDefaults(options, 'choropleth');

        var w = options.chart.plotWidth;
        var h = options.chart.plotHeight;

        _.extend(options.choropleth, {
            feature: 'all',
            projection: (d3.geo.miller || d3.geo.equirectangular)(),
            scale: (w + 1) / 2 / Math.PI,
            presition: 0.1,
            translation: [w/2, h/2]
        });

        return this.choropleth.renderer.call(this, data, layer, options);
    };


    Contour.export('WorldChoropleth', renderer);
})();

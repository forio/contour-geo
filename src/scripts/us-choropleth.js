(function () {
    'use strict';

    var renderer = function (data, layer, options) {
        this.ensureDefaults(options, 'choropleth');

        _.defaults(options.choropleth, options.USChoropleth, {
            projection: d3.geo.albersUsa(),
            feature: 'states'
        });

        return this.choropleth.renderer.call(this, data, layer, options);
    };


    Contour.export('USChoropleth', renderer);
})();

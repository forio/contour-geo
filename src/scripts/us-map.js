(function () {
    'use strict';

    var renderer = function (data, layer, options) {
        this.ensureDefaults(options, 'choropleth');

        options.choropleth = options.choropleth || {};
        _.merge(options.choropleth, {
            projection: d3.geo.albersUsa(),
            feature: 'states'
        }, options.USMap);

        return this.choropleth.renderer.call(this, data, layer, options);
    };

    Contour.export('USMap', renderer);
})();

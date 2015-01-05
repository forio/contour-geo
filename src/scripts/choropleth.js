(function () {
    'use strict';

    var defaults = {
        // don't add to output documentation until this is different from map.js
        /*
        choropleth: {
        }
        */
    };

    var choropleth = function (data, layer, options) {
        this.ensureDefaults(options, 'map');

        options.map = options.map || {};
        _.merge(options.map, options.choropleth);

        return this.map.renderer.call(this, data, layer, options);
    };

    choropleth.defaults = defaults;

    // don't add to output documentation until this is different from map.js

    Contour.export('choropleth', choropleth);
})();

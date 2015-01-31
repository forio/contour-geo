(function () {
    'use strict';

    var renderer = function (data, layer, options) {
        this.ensureDefaults(options, 'map');

        options.choropleth = options.choropleth || {};
        _.merge(options.choropleth, {
            projection: d3.geo.albersUsa(),
            feature: 'states'
        }, options.USMap);

        return this.choropleth.renderer.call(this, data, layer, options);
    };

    /**
    * Adds a map visualization to the Contour instance, using the `albersUsa` projection and a TopoJSON file with data on US states, such as the `us.json` and `us-all.json` TopoJSON files included with Contour-Geo. 
    *
    * This visualization is a shorthand for configuring a [`.map()`](#map) visualization that is focused on the US.
    *
    * ### Example:
    *
    *       d3.json('us-all.json', function (us) {
    *           new Contour({ el: '.map' })
    *               .USMap(us)
    *               .render()
    *       });
    *
    * @name USMap(data, options)
    * @param {object} data The data (topology) to be rendered with this visualization. This must be in TopoJSON format.
    * @param {object} options (Optional) Configuration options particular to this visualization that override the defaults.
    */

    Contour.export('USMap', renderer);
})();

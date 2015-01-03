(function () {
    'use strict';

    var defaults = {
        choropleth: {
        }
    };


    /**
    * Adds a choropleth map visualization to the Contour instance. A [Choropleth map](http://en.wikipedia.org/wiki/Choropleth_map) is the most comon type of thematic maps for visualizing statistical data.
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
    var choropleth = function (data, layer, options) {
        this.ensureDefaults(options, 'map');

        options.map = options.map || {};
        _.merge(options.map, options.choropleth);

        return this.map.renderer.call(this, data, layer, options);
    };

    choropleth.defaults = defaults;

    Contour.export('choropleth', choropleth);
})();

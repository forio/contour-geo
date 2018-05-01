import Contour from 'contour';
import d3 from 'd3';

var renderer = function (data, layer, options) {
    this.ensureDefaults(options, 'map');

    var w = options.chart.plotWidth;
    var h = options.chart.plotHeight;

    // use miller projection if its available.
    // needs to include <script src="http://d3js.org/d3.geo.projection.v0.min.js" charset="utf-8"></script>
    // https://github.com/d3/d3-geo-projection
    options.choropleth = options.choropleth || {};
    Contour.utils.merge(options.choropleth, {
        feature: 'countries',
        projection: (d3.geo.miller || d3.geo.equirectangular)(),
        scale: (w + 1) / 2 / Math.PI,
        precision: 0.1,
        translation: [w/2, h/2]
    }, options.worldChoropleth);

    return this.choropleth.renderer.call(this, data, layer, options);
};

/**
* Adds a map visualization to the Contour instance, using the `miller` projection if available (include `<script src="http://d3js.org/d3.geo.projection.v0.min.js" charset="utf-8"></script>`), or the `equirectangular` projection otherwise, and a TopoJSON file with data on world countries such as the `world.json` TopoJSON file included with Contour-Geo.
*
* This visualization requires the [`.geo()`](#geo) frame.
*
* This visualization is a shorthand for configuring a [`.map()`](#map) visualization for the world.
*
* ### Example:
*
*       d3.json('world.json', function (world) {
*           new Contour({ el: '.map' })
*               .geo()
*               .worldMap(world)
*               .render()
*       });
*
* @name worldMap(data, options)
* @param {object} data The data (topology) to be rendered with this visualization. This must be in TopoJSON format.
* @param {object} options (Optional) Configuration options particular to this visualization that override the defaults.
*/

Contour.export('worldMap', renderer);

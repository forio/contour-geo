#### **projection** : {<%= type %>}

*default: d3.geo.mercator()*

The projection to use for your Contour-Geo visualization.

All of the [D3 Geo Projections](http://github.com/mbostock/d3/wiki/Geo-Projections) are available.

**Example:**

	new Contour({
		el: '.myMap'
	})
    .geo()
	.map(mapUnit, {
		projection: d3.geo.azimuthalEqualArea()
	})
	.render();

*[Try it.](<%= jsFiddleLink %>)*

**Notes:**

Typically when you change the `projection` from the default value, you also need to change the [`center`](#geo_config/config.map.center) and [`translation`](#geo_config/config.map.translation).

For additional projections, include `<script src="http://d3js.org/d3.geo.projection.v0.min.js" charset="utf-8"></script>` in your page. This provides access to the additional projections that are part of the [D3 Extended Geographic Projections](http://github.com/d3/d3-geo-projection).

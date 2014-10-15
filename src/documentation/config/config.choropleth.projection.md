#### **projection** : {<%= type %>}

*default: d3.geo.albersUsa()*

The projection to use for your Contour-Geo visualization.

All of the [D3 Geo Projections](https://github.com/mbostock/d3/wiki/Geo-Projections) are available:

* `d3.geo.albersUsa()`
* `d3.geo.azimuthalEqualArea()`
* `d3.geo.azimuthalEquidistant()`
* `d3.geo.conicEqualArea()` also known as `d3.geo.albers()`
* `d3.geo.conicConformal()`
* `d3.geo.conicEquidistant()`
* `d3.geo.equirectangular()`
* `d3.geo.gnomonic()`
* `d3.geo.mercator()`
* `d3.geo.orthographic()`
* `d3.geo.stereographic()`
* `d3.geo.transverseMercator()`


**Example:**

	new Contour({
		el: '.myMap'
	})
	.choropleth(mapUnit, { projection: d3.geo.mercator() })
	.render();

<!-- TODO: *[Try it.](<%= jsFiddleLink %>)* -->

**Notes:**

Typically when you change the `projection` from the default value, you also need to change the [`center`](#geo_config-geo_config/config.choropleth.center) and [`translation`](#geo_config-geo_config/config.choropleth.translation).


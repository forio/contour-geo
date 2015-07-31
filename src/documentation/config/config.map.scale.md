#### **scale** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

The scale to use in the [`projection`](#geo_config/config.map.projection) of your topology. The scale factor corresponds linearly to the distance between projected points.

If left undefined, the `scale` is set to [`chart.plotWidth`](#core_config/config.chart.plotWidth) * [`scaleRatio`](#geo_config/config.map.scaleRatio).

**Example:**

	new Contour({
		el: '.myMap'
	})
    .geo()
	.map(mapUnit, {
		feature: 'states',
		scale: 80
	})
	.render();

*[Try it.](<%= jsFiddleLink %>)*

**Notes:**

The map projection defaults to [`d3.geo.mercator`](https://github.com/mbostock/d3/wiki/Geo-Projections).



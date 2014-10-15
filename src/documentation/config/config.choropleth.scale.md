#### **scale** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

The scale to use in the [`projection`](#geo_config/config.choropleth.projection) of your topology. The scale factor corresponds linearly to the distance between projected points.

If left undefined, the `scale` is set to [`chart.plotWidth`](#core_config/config.chart.plotWidth) * [`scaleRatio`](#geo_config/config.choropleth.scaleRatio).

**Example:**

	new Contour({
		el: '.myMap'
	})
	.choropleth({ topoJson: mapUnit }, { scale: 800 })
	.render();

*[Try it.](<%= jsFiddleLink %>)*

**Notes:**

The choropleth projection defaults to [`d3.geo.albersUsa`](https://github.com/mbostock/d3/wiki/Geo-Projections). 



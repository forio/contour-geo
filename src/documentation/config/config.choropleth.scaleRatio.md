#### **scaleRatio** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

If the [`scale`](#geo_config/config.choropleth.scale) is left undefined, the `scale` is set to [`chart.plotWidth`](#core_config/config.chart.plotWidth) * [`scaleRatio`](#geo_config/config.choropleth.scaleRatio).

If [`scale`](#geo_config/config.choropleth.scale) is defined, this property is ignored.

**Example:**

	new Contour({
		el: '.myMap'
	})
	.choropleth({ topoJson: mapUnit }, { 
		feature: 'states',
		scaleRatio: 1.2 
	})
	.render();

*[Try it.](<%= jsFiddleLink %>)*

**Notes:**

The choropleth projection defaults to [`d3.geo.mercator`](https://github.com/mbostock/d3/wiki/Geo-Projections). 


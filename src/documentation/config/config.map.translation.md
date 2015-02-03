#### **translation** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

The translation offset of the projection, which determines the pixel coordinates of the projection's [`center`](#geo_config/config.map.center) within the container of the visualization.

For instance, if your Contour instance is rendered in a `<div>` that is 600x800, setting a translation of `[300,400]` will put the [`center`](#geo_config/config.map.center) of your map visualization in the center of your Contour `<div>`.

**Example:**

	new Contour({
		el: '.myMap'
	})
    .geo()
	.map(mapUnit, {
		feature: 'countries',
		center: [-122, 37],
		translation: [300,400]
	})
	.render();

*[Try it.](<%= jsFiddleLink %>)*





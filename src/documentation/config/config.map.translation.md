#### **translation** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

The translation offset of the projection, which determines the pixel coordinates of the projection's [`center`](#geo_config/config.map.center) within the container of the visualization.

**Example:**

	new Contour({
		el: '.myMap'
	})
    .geo()
	.map(mapUnit, {
		feature: 'countries',
		// center at San Francisco
		center: [-122, 37],
		// translate by pixels and end up near Seattle
		translation: [300,400]
	})
	.render();

*[Try it.](<%= jsFiddleLink %>)*





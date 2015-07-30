#### **size** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

The size of the marker. 

For a marker with [shape](#geo_config/config.marker.shape) of `circle`, the size is the diameter. 

For a marker with [shape](#geo_config/config.marker.shape) of `triangle`, the size is the (linear) scaling factor to apply to the base and height of the triangle.

**Example:**

	d3.json('us-states.json', function (mapUnit) {
		new Contour({
			el: '.map'
		})
		.geo()
		.USMap(mapUnit)
        .marker([[-122, 37]], { shape: 'circle', size: 15 })
        .marker([[-120, 39]], { shape: 'triangle', size: 30 })
		.render();
	});

**Notes:**

If you define your own [`shape`](#geo_config/config.marker.shape), by setting `shape` to a function that returns an SVG layer, you can reference `options.marker.size` within your function to scale your own marker appropriately.


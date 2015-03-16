#### **shape** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

Sets the shape of the marker. This can be a literal string, or any function that returns an SVG layer with a shape.

When using a string, the options available are:

* `circle` (with a diameter of [`size`](#geo_config/config.marker.size))
* `triangle` (isoceles triangle, with a base of [`size`](#geo_config/config.marker.size) and a height of [`size`](#geo_config/config.marker.size))


**Example:**

	d3.json('us-states.json', function (mapUnit) {
		new Contour({
			el: '.map'
		})
		.geo()
		.USMap(mapUnit)
		.marker([[-87, 41]], {shape: 'triangle'})
		// flip the built-in triangle,
		// so that it's pointing the other direction
		.marker([[-121, 38]], {shape: 
			function (data, layer, options) {
	            var projection = options.map.projection;
	            var size = options.marker.size;
	            var points = [-0.5,0, 0,1, 0.5,0].map(function (p) { return p * size; }).join(' ');
	
	            return layer.append('polyline')
	                .attr('transform', function (d) {
	                    var proj = projection(d);
	                    return 'translate(' + proj[0] + ',' + proj[1] + ')';
	                })
	                .attr('points', points)
	                .attr('fill', options.marker.fill);

        	}
		})
		.render();
	});




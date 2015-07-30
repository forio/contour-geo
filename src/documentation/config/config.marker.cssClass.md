#### **cssClass** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

The name of the CSS class to apply to each feature. This can be a literal string, or any function that returns a string with the name of a CSS class.

If the `cssClass` is a function, the function takes the array of [longitude, latitude] pairs as data.

Longitude and latitude are specified in degrees.

* Longitude is positive for East, negative for West.
* Latitude is positive for North, negative for South.

**Example:**

	<style>
		.northern { fill: blue }
		.southern { fill: red }
	</style>

	d3.json('us-all.json', function (mapUnit) {
		new Contour({
			el: '.map'
		})
		.geo()
		.USMap(mapUnit)
		.marker(
			[[-122, 37], [-87, 41], [-122, 47], 
			 [-84, 33], [-71, 42], [-90, 29]], 
			{ cssClass: function(d) { 
				// d is the coordinates of the marker, [long, lat]
				if (d[1] > latThreshold) { return 'northern'; }
				else { return 'southern'; }
				} 
			})
		.render();
	});

**Notes:**

Use `cssClass` to apply a CSS class to the marker. Use [`fill`](#geo_config/config.marker.fill) to apply a particular fill color.
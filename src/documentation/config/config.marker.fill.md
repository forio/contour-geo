#### **fill** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

The color (hexadecimal) to apply to each marker. This can be a literal string, or any function that returns a string with the color.

If the `fill` is a function, the function takes in the array of [longitude, latitude] pairs as data. 

Longitude and latitude are specified in degrees.

* Longitude is positive for East, negative for West.
* Latitude is positive for North, negative for South.


**Example:**

	d3.json('us-states.json', function (mapUnit) {
		new Contour({
			el: '.map'
		})
		.geo()
		.USMap(mapUnit)
		.marker([[-122, 37]], {fill: '#0000ff'})
		.render();
	});

**Notes:**

Use [`cssClass`](#geo_config/config.marker.cssClass) to apply a CSS class to the marker. Use `fill` to apply a particular fill color.
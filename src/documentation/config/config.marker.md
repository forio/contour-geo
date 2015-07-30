#### **marker** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

Adds one or more marker visualizations to the Contour instance. Markers allow you to add small shapes (circles or triangles) to your map, for example to indicate features of interest.

The first argument to the visualization is an array of [longitude, latitude] pairs where the markers should appear. 

Longitude and latitude are specified in degrees.

* Longitude is positive for East, negative for West.
* Latitude is positive for North, negative for South.

This visualization requires the [`.geo()`](#geo) frame.

To override any of the default configuration options in a marker, include the `marker` configuration object in the configuration options that you pass to your Contour constructor, or in the configuration object passed to the particular marker visualization.

**Example:**

	d3.json('us-states.json', function (mapUnit) {
		new Contour({
			el: '.map',
			marker: {
				fill: '#0000ff'
			}
		})
		.geo()
		.USMap(mapUnit)
		.marker([[-122, 37], [-87, 41]], {shape: 'circle'})
		.marker([[-120, 39]], {shape: 'triangle'})
		.render();
	});




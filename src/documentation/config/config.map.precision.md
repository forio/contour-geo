#### **precision** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

Pass through to [d3.geo.projection.precision()](https://github.com/mbostock/d3/wiki/Geo-Projections): Sets the threshold, in pixels, for the projection's [adaptive resampling](http://bl.ocks.org/mbostock/3795544). This value corresponds to the [Douglas–Peucker](http://en.wikipedia.org/wiki/Ramer–Douglas–Peucker_algorithm) distance.

A `precision` of `0` disables adaptive resampling.

**Example:**

	new Contour({
		el: '.myMap'
	})
	.map(mapUnit, {
		precision: 10
	})
	.render();


*[Try it.](<%= jsFiddleLink %>)*



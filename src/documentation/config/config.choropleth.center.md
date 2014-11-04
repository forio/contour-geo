#### **center** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

Sets the center of the [`projection`](#geo_config/config.choropleth.projection) to the geographical location specified as a two-element array of [longitude, latitude].

Longitude and latitude are specified in degrees. 

* Longitude is positive for East, negative for West.
* Latitude is positive for North, negative for South.

Must remain undefined if using the [`d3.geo.albersUsa()` projection](#geo_config/config.choropleth.projection), which is already centered.

**Example:**

	new Contour({
		el: '.myMap'
	})
	.choropleth({ topoJson: mapUnit },
		{ feature: 'countries', center: [-122, 37] })
	.render();

*[Try it.](<%= jsFiddleLink %>)*

**Notes:**

The choropleth projection defaults to [`d3.geo.albersUsa`](https://github.com/mbostock/d3/wiki/Geo-Projections). 



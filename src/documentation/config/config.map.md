#### **map** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

To override any of the default configuration options in a map, include the `map` configuration object in the configuration options that you pass to your Contour constructor.

Alternatively, pass the options as the second argument to the `map` visualization itself.

**Example:**

	new Contour({
		el: '.myMap',
		map: {
			// map-specific configuration options
		}
	})
	.map({ topoJson: mapUnit }, {
		// additional map-specific configuration options
		feature: 'countries'
	})
	.render();

*[Try it.](<%= jsFiddleLink %>)*

<% if(notes) { %><%= notes %><% } %>


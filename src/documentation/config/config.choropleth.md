#### **choropleth** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

To override any of the default configuration options in a choropleth, include the `choropleth` configuration object in the configuration options that you pass to your Contour constructor. 

Alternatively, pass the options as the second argument to the `choropleth` visualization itself.

**Example:**

	new Contour({
		el: '.myMap',
		choropleth: {
			// choropleth-specific configuration options
		}
	})
	.choropleth({ topoJson: mapUnit }, { 
		// additional choropleth-specific configuration options 
		feature: 'countries'
	})
	.render();

*[Try it.](<%= jsFiddleLink %>)*

<% if(notes) { %><%= notes %><% } %>


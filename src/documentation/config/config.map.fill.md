#### **fill** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

The color (hexadecimal) to apply to each feature. This can be a literal string, or any function that returns a string with the color.

If the `fill` is a function, the function takes in the `geometries` data from the TopoJSON file, so has access to any data the TopoJSON file includes. For example, this allows you to color based on each separate geometry in your map.

**Example:**

    new Contour({
        el: '.myMap'
    })
    .map(mapUnit, {
    	fill: function(geom) {
    		if (geom.id in ('NC','ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY')) { return: '#ffffff'; }
    		else { return '#000000'; }
    	}
    })
    .render();

*[Try it.](<%= jsFiddleLink %>)*

**Notes:**

Use [`cssClass`](#config.map.cssClass) to apply a CSS class to the map. Use `fill` to apply a particular fill color.
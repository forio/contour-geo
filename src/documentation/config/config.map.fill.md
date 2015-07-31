#### **fill** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

The color (hexadecimal) to apply to each feature. This can be a literal string, or any function that returns a string with the color.

If the `fill` is a function, the function takes in the `geometries` data from the TopoJSON file, so has access to any data the TopoJSON file includes. For example, this allows you to color based on each separate geometry in your map.

**Example:**

    new Contour({
        el: '.myMap'
    })
    .geo()
    .map(mapUnit, {
    	fill: function(geom) {
    		if (['NC','ND', 'NE', 'NH', 'NJ', 'NM', 
    			'NV', 'NY'].indexOf(geom.id) !== -1) {
                    return 'blue';
                } else {
                    return 'gray';
                }
            }
    })
    .render();

*[Try it.](<%= jsFiddleLink %>)*

**Notes:**

Use [`cssClass`](#geo_config/config.map.cssClass) to apply a CSS class to the map. Use `fill` to apply a particular fill color.
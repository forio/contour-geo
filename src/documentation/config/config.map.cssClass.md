#### **cssClass** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

The name of the CSS class to apply to each feature. This can be a literal string, or any function that returns a string with the name of a CSS class.

If the `cssClass` is a function, the function takes in the `geometries` data from the TopoJSON file, so has access to any data the TopoJSON file includes. For example, this allows you to color based on each separate geometry in your map.

**Example:**

	<style>
		 /* Blue hue colors from Color Brewer http://colorbrewer2.org/  */
		.qNE-9{fill:rgb(247,251,255)}
		.qNV-9{fill:rgb(222,235,247)}
		.qNH-9{fill:rgb(198,219,239)}
		.qNJ-9{fill:rgb(158,202,225)}
		.qNM-9{fill:rgb(107,174,214)}
		.qNY-9{fill:rgb(66,146,198)}
		.qNC-9{fill:rgb(33,113,181)}
		.qND-9{fill:rgb(8,81,156)}
	</style>

    new Contour({
        el: '.myMap'
    })
    .geo()
    .USMap(mapUnit, {
    	cssClass: function(geom) {
    		return "q" + geom.id + "-9";
    	}
    })
    .render();

*[Try it.](<%= jsFiddleLink %>)*

**Notes:**

Use `cssClass` to apply a CSS class to the map. Use [`fill`](#geo_config/config.map.fill) to apply a particular fill color.


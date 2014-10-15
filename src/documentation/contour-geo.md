
##Advanced Visualizations: Maps

You can add one or more map visualizations to any instance of Contour.

Adding a map visualization, or choropleth, requires:

 * Having a TopoJSON file containing the geometry for your map. You can [make your own TopoJSON file](#topojson) or use one of the [geometries included with Contour-Geo](#geo-included). 
 * Including `contour-geo.js` in your page. For example, `<script src="yourPath/contour.geo.min.js"></script>`. See the [Get Contour](get_contour.html) page to download this library.

Like the [core Contour visualizations](#visualizations), each Contour-Geo visualization takes two arguments:

* `data`, the data to display in the visualization. 
* `options`, the Contour-Geo configuration object, which is a set of configuration properties. This is optional. Select the [config](#geo_config/config) property from the left to see details.

Choropleth visualizations require a TopoJSON file with the topology to draw. ([TopoJSON](https://github.com/mbostock/topojson/wiki) is an extension of GeoJSON that encodes topology and is substantially more compact.)

Because of this, typically choropleth visualizations are created as part of a callback function passed to a [`d3.json`](https://github.com/mbostock/d3/wiki/Requests#d3_json) call that parses the TopoJSON file. This allows your page to load the TopoJSON file, then create a Contour visualization with the parsed JSON. For example:

    d3.json('parks.json', function (us) {
    	new Contour({ el: '.map' })
    		.choropleth(
    			{ topoJson: us },
    			{ projection: d3.geo.albers() }
    		)
    		.render();
    });


###Customizing visualizations

You can [make your own TopoJSON file](#topojson) or use one of the [geometries included with Contour-Geo](#geo-included).

In either case, there are several ways you can customize your Contour-Geo visualizations. While these techniques are available for all Contour visualizations, they are particularly useful for choropleths because you can vary these customizations based on the data in the TopoJSON file from which the choropleth is drawn.

Some examples for customizing visualizations:

* Include a `cssClass` in the data you pass to the `choropleth`.

	The `cssClass` can be a class name or a function that returns a class name. In either case, that class is applied to the choropleth when it is drawn in the browser. 
	
	If the `cssClass` is a function, the function takes in the `geometries` data from the TopoJSON file, so has access to any data the TopoJSON file includes. For example, this allows you to color based on each separate geometry in your map. 
	
	See an [example using the `cssClass` with a `choropleth`](gallery.html#/geo).
	
* Add a `tooltip`, with a `tooltip.formatter`, and reference the data you pass to the `choropleth`. 

	The `formatter` takes in the `geometries` data from the TopoJSON file, so has access to any data the TopoJSON file includes, for example `.id` and `properties.name` (where `name` is included for each of the TopoJSON files that are part of the Contour-Geo download, but could otherwise be any property that you decide should be included when you [make your own TopoJSON file](#topojson)). 

	See an [example using the `tooltip.formatter` with a `choropleth`](gallery.html#geo).


###Gallery

For examples of Contour-Geo in action, see the [Gallery](gallery.html#/geo).
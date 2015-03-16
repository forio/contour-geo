
##Advanced Visualizations: Geo

You can add one or more map visualizations to any instance of Contour.

Adding a map visualization requires:

 * Having a TopoJSON file containing the geometry for your map. You can [make your own TopoJSON file](#topojson) or use one of the [geometries included with Contour-Geo](#geo-included).
 * Including `contour-geo.js` in your page. For example, `<script src="yourPath/contour.geo.min.js"></script>`. See the [Get Contour](get_contour.html) page to download this library.
 * Adding the [`.geo()` visualization](#geo) to your Contour instance. 

Like the [core Contour visualizations](#visualizations), each Contour-Geo visualization takes two arguments:

* `data`, the data to display in the visualization.
* `options`, the Contour-Geo configuration object, which is a set of configuration properties. This is optional. Select the [config](#geo_config/config) property from the left to see details.

Map visualizations require a TopoJSON file with the topology to draw. ([TopoJSON](http://github.com/mbostock/topojson/wiki) is an extension of GeoJSON that encodes topology and is substantially more compact.)

Because of this, typically map visualizations are created as part of a callback function passed to a [`d3.json`](http://github.com/mbostock/d3/wiki/Requests#d3_json) call that parses the TopoJSON file. This allows your page to load the TopoJSON file, then create a Contour visualization with the parsed JSON. For example:

    d3.json('parks.json', function (us) {
    	new Contour({ el: '.map' })
            .geo()
    		.map(
    			us,
    			{ projection: d3.geo.albers() }
    		)
    		.render();
    });


###Customizing maps

You can [make your own TopoJSON file](#topojson) or use one of the [geometries included with Contour-Geo](#geo-included).

In either case, there are several ways you can customize your Contour-Geo visualizations:

Some examples for customizing maps:

* Change the default `options` passed in to the visualization.

	For instance, change the focus of your map by including a specific value for the [`projection`](#geo_config/config.map.projection), [`center`](#geo_config/config.map.center), or [`scale`](#geo_config/config.map.scale).

	For additional customization, pass in a [`cssClass`](#geo_config/config.map.cssClass) whose value is a function; the function takes in the `geometries` data from the TopoJSON file, so has access to any data the TopoJSON file includes. This allows you to color based on each separate geometry in your map.

* Add a `tooltip`, with a `tooltip.formatter`, and reference the data you pass to the `map`.

	The `formatter` takes in the `geometries` data from the TopoJSON file, so has access to any data the TopoJSON file includes, for example `.id` and `properties.name` (where `name` is included for each of the TopoJSON files that are part of the Contour-Geo download, but could otherwise be any property that you decide should be included when you [make your own TopoJSON file](#topojson)).

	See an [example using the `tooltip.formatter` with a `map`](gallery.html#geo/map/california).


###Gallery

For examples of Contour-Geo in action, see the [Gallery](gallery.html#/geo).
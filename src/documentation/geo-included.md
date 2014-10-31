###Built-in visualizations and included geometries

Two **map visualizations** are included with Contour-Geo:

* `choropleth`: Adds a choropleth map visualization to the Contour instance. While the default configuration options are designed for a US map with an Albers USA projection, you can pass in any TopoJSON file and use the configuration options to style the resulting map appropriately.
* `smallStatesCallouts`: Adds callouts for several of the smaller states on the East Coast of the US.

You can access more information about these from the left.

Additionally, several **map geometries (in TopoJSON format)** are included with Contour-Geo:

* `us-all.json`: All of the US states.
* `us.json`: All of the US states including all of the US counties.
* `world.json`: The world, with country boundaries.

These TopoJSON files are included in your [download of Contour-Geo](get_contour.html). You can see them in visualizations in the [Gallery](gallery.html#/geo).
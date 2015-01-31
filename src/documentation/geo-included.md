###Built-in visualizations and included geometries

Several **map visualizations** are included with Contour-Geo:

* [`map`](#map): Adds a map visualization to the Contour instance. Map visualizations require a TopoJSON file with the topology to draw, and you can customize using the `options` available.
* [`worldMap`](#world-map): Adds a map visualization to the Contour instance, using the `world.json` TopoJSON file included with Contour-Geo. Uses the Miller or Equirectangular projection by default.
* [`USMap`](#us-map): Adds a map visualization to the Contour instance, using the `us-all.json` TopoJSON file included with Contour-Geo. Uses the Albers USA projection by default.
* [`smallStatesCallouts`](#smallStatesCallout): Adds callouts for several of the smaller states on the East Coast of the US.

You can access more information about these from the left.

Additionally, several **map geometries (in TopoJSON format)** are included with Contour-Geo:

* `us-all.json`: All of the US states.
* `us.json`: All of the US states including all of the US counties.
* `world.json`: The world, with country boundaries.

These TopoJSON files are included in your [download of Contour-Geo](get_contour.html). You can see them in visualizations in the [Gallery](gallery.html#/geo).
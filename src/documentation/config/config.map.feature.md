#### **feature** : {<%= type %>}

<% if(defaultValue !== "[object Object]") { %>*default: <%= defaultValue %>* <% }%>

The name of the `GeometryCollection` object (TopoJSON feature) within the TopoJSON `Topology` object to render as a map.

When you are [creating your own TopoJSON file](#topojson), this name defaults to the name of the TopoJSON output file, but you can also specify it on the command line when you create that file.

**Examples:**

* Creating the TopoJSON file:

		> topojson -o us.json -- counties=us-counties.json

* Excerpt from the TopoJSON file:

		{
			"type": "Topology",
			"objects": {
				"counties": {
					"type": "GeometryCollection",
					"geometries": [
						//data for individual counties
					]
				}
			},
			"arcs": // data for all arcs
		}

* Using this data in a Contour-Geo visualization:

		new Contour({
			el: '.myMap'
		})
		.geo()
		.map(mapUnit, {
			feature: 'counties',
			projection: d3.geo.albersUsa()
		})
		.render();

*[Try it.](<%= jsFiddleLink %>)*

**Notes:**

See the walkthrough on [creating your own TopoJSON file](#topojson), or read the [full TopoJSON spec](http://github.com/mbostock/topojson/wiki/Command-Line-Reference).

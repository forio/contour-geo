###TopoJSON: Building your own map from scratch with Contour

Contour-Geo map visualizations require a TopoJSON file with the topology to draw.

TopoJSON is an extension of GeoJSON that encodes topology and is substantially more compact. The full spec, including command line reference for creating TopoJSON files, is available [here](http://github.com/mbostock/topojson/wiki).

When you [download Contour-Geo](get_contour.html), a few TopoJSON files are included. See the details [here](#geo-included).

You can also create your own TopoJSON file using a combination of the `topojson` and `ogr2ogr` utitilies.

**To create your own TopoJSON file:**

1. Download shapefiles, for example from the remarkable [Natural Earth](http://www.naturalearthdata.com/).
2. Install the [`ogr2ogr`](http://www.gdal.org/ogr2ogr.html) and [`topojson`](https://github.com/mbostock/topojson) tools. For example:

		brew install gdal
		npm install -g topojson

3. Convert your shapefile to GeoJSON. This is a good time to filter if you are only interested in part of the data you downloaded.

	Use the format:

		ogr2ogr -f GeoJSON \
		-where "filter" \
		outputGeoJSON.json \
		inputShapeFile.shp

	For example:

		ogr2ogr -f GeoJSON \
		-where "nps_region in ('Pacific West')" \
		geoparks.json \
		ne_10m_parks_and_protected_lands_area.shp

4. Convert your GeoJSON file to TopoJSON.

	Use the format:

		topojson -o outputTopoJSON.json \
		--id-property id \
		--properties propertyName1=property1,propertyName2=property2
		-- outputGeoJSON.json

	The first argument is the name of the output TopoJSON file.

	The second argument is the name of the feature to promote to the id of the geometry.

	The third argument is the set of other feature properties to preserve.

	The last argument is the input file. You can list several if you want to combine several topology data sets in your Contour visualization.

	For example:

		topojson -o parks.json \
		--id-property id=unit_code \
		--properties name=unit_name \
		-- geoparks.json us-all.json

	Here we are creating a `parks.json` file that is a combination of our GeoJSON file `geoparks.json` and the existing TopoJSON file `us-all.json` included with Contour-Geo. When we create a Contour visualization with `parks.json`, we'll see both the US states and the US national parks.

**Note:** The [topojson command line reference](http://github.com/mbostock/topojson/wiki/Command-Line-Reference) contains additional detail on step 4. This [excellent blog post from TopoJSON creator MBostock](http://bost.ocks.org/mike/map/) provides more detail on all of the above steps (and then walks through how to create a d3 visualization from your TopoJSON file).

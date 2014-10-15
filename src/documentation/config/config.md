#### **config** : {<%= type %>}

For each Contour-Geo visualization that you add to your Contour instance (e.g. `choropleth`, `smallStatesCallout`), you can optionally pass in a configuration object. This object is a set of configuration options specific to that visualization.

Each set of options can be added:

* to the configuration options object that you pass in to the Contour constructor; this will override the configuration defaults

		new Contour({
	      el: '.myMap',
	      choropleth: {
	      // choropleth-specific configuration options
	      }
	    })

* to the configuration options object that you pass in to the particular visualization when you add that visualization to your Contour instance; this will override the configuration options object passed in to the Contour constructor

		new Contour({
		  el: '.myMap',
		  choropleth: { projection: d3.geo.albers() }
		})
		.choropleth({ topoJson: mapUnit }, { projection: d3.geo.mercator() } )
		.render();

Each configuration option can be:

* a literal value of the correct type

		scaleRatio: 1.5

* a constant of the correct type that is available within your current scope

		scaleRatio: bestRatio

* a function that returns a value of the correct type

		scaleRatio: function() { 
			if (condition) { return 1.62; } 
			else { return bestRatio; } 
		}


$(function () {
    d3.json('http://forio.com/tools/contour/geo/us-all.json', function(mapUnit) {
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
});
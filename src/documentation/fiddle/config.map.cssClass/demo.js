$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/us-all.json', function(mapUnit) {
        new Contour({
	        el: '.myMap'
	    })
	    .map(mapUnit, {
	    	cssClass: function(geom) {
	    		return "q" + geom.id + "-9";
	    	}
	    })
	    .render();
});
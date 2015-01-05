$(function () {
    d3.json('http://forio.com/tools/contour/geo/world.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .map(mapUnit, { 
        	projection: d3.geo.azimuthalEqualArea(), 
        	feature: 'countries', 
        	scale: 300 
        })
        .render();
});
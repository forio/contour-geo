$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/us.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .geo()
        .map(mapUnit, {
        	feature: 'counties',
        	projection: d3.geo.albersUsa()
        })
        .render();
    });
});
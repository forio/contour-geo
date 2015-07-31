$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/us-all.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .geo()
        .map(mapUnit, {
        	feature: 'states',
        	scale: 80
        })
        .render();
    });
});
$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/us-all.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .geo()
        .map(mapUnit, {
        	feature: 'states',
        	scaleRatio: 0.2
        })
        .render();
    });
});
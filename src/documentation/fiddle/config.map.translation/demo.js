$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/world.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .geo()
        .map(mapUnit, {
            feature: 'countries',
            center: [-122, 37],
            translation: [300,400]
        })
        .render();
    });
});
$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/world.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .geo()
        .map(mapUnit, {
            projection: d3.geo.azimuthalEqualArea(),
            feature: 'countries',
            scale: 100
        })
        .render();
    })
});
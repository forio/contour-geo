$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/world.json', function(mapUnit) {
        new Contour({
            el: '.myMap',
            map: {
                // map-specific configuration options
            }
        })
        .geo()
        .map(mapUnit, {
            // additional map-specific configuration options
            feature: 'countries',
            scale: 500,
            center: [-122, 37]
        })
        .render();
    });
});
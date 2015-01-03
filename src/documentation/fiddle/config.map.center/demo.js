$(function () {
    d3.json('http://forio.com/tools/contour/geo/world.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .map(mapUnit,
            { feature: 'countries', center: [-122, 37]})
        .render();
    });
});
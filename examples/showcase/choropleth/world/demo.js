$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/world.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .worldChoropleth(mapUnit, { feature: 'all' })
        .render();
    });
});
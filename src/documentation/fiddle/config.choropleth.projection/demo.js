$(function () {
    d3.json('http://forio.com/tools/contour/geo/world.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .choropleth({topoJson: mapUnit}, { projection: d3.geo.mercator(), feature: 'countries', scale: 300 })
        .render();
});
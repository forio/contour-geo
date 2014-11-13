$(function () {
    d3.json('http://forio.com/tools/contour/geo/us-all.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .choropleth({topoJson: mapUnit}, { feature: 'states', scale: 800 })
        .render();
    })
});
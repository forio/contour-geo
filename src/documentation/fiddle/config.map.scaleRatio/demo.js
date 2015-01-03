$(function () {
    d3.json('http://forio.com/tools/contour/geo/us-all.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .map(mapUnit, { feature: 'states', scaleRatio: 1.2 })
        .render();
    });
});
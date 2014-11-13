$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/us.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .USChoropleth({ topoJson: mapUnit })
        .render();
    });
});
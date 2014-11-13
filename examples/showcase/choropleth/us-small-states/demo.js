$(function () {
    d3.json('http://forio.com/tools/contour/geo/us-all.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .choropleth({ topoJson: mapUnit }, { projection: d3.geo.albersUsa(), feature: 'states' })
        .smallStatesCallouts()
        .render();
    })
});
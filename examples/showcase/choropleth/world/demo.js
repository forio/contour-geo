$(function () {
    d3.json('http://forio.com/tools/contour/geo/world.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .choropleth({topoJson: mapUnit},
        			{feature: 'countries', projection: d3.geo.equirectangular(), center: [-122,37], scale: 100, translation: [100,100]})
        .render();
    })
});
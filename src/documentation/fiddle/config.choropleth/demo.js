$(function () {
    d3.json('http://forio.com/tools/contour/geo/world.json', function(mapUnit) {
        new Contour({
            el: '.myMap',
            choropleth: {
                // choropleth-specific configuration options
            }
        })
        .choropleth({topoJson: mapUnit}, { 
            // additional choropleth-specific configuration options 
            feature: 'countries'
        })
        .render();
    })
});
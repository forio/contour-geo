$(function () {

    var tooltipTemplate = _.template('<span class="waterName"><%= name %></span>');

    d3.json('https://forio.com/tools/contour/geo/gallery/ca_with_lakes_and_rivers.json', function(mapUnit) {

        new Contour({
            el: '.myMap',
            map: {
                center: [-120, 38],
                scaleRatio: 2.6
            },
            tooltip: {
                formatter: function (d, i, j) {
                    if (d.properties.featurecla == "River") {
                        return tooltipTemplate({ name: d.properties.name + " River" });
                    } else {
                        return tooltipTemplate({ name: d.properties.name });
                    }
                }
            }
        })
        .geo()
        .map(mapUnit, { feature: 'ca' })
        .map(mapUnit, { feature: 'lakes_ca' })
        .map(mapUnit, { feature: 'lakes_supp' })
        .map(mapUnit, { feature: 'rivers_large' })
        .map(mapUnit, { feature: 'rivers_small' })
        .tooltip()
        .render();
    });
});
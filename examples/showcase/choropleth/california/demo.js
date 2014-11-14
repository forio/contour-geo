$(function () {

    var tooltipTemplate = _.template('<span class="waterName"><%= name %></span>');

    d3.json('ca_with_lakes_and_rivers.json', function(mapUnit) {
        new Contour({
            el: '.myMap',
            choropleth: {
                center: [-122, 37],
                scale: 1800,
                translation: [300, 250]
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
        .choropleth(mapUnit, { feature: 'ca' })
        .choropleth(mapUnit, { feature: 'lakes_ca' })
        .choropleth(mapUnit, { feature: 'lakes_supp' })
        .choropleth(mapUnit, { feature: 'rivers_large' })
        .choropleth(mapUnit, { feature: 'rivers_small' })
        .tooltip()
        .render();
    });
});
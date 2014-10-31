$(function () {

    var tooltipTemplate = '<span class="waterName"><%= name %></span>';

    d3.json('ca_with_lakes_and_rivers.json', function(mapUnit) {
        new Contour({
            el: '.myMap',
            choropleth: { projection: d3.geo.mercator(), center: [-122, 37], scale: 1800, translation: [300,250] },
            tooltip: {
                formatter: function (d, i, j) {
                	if (d.properties.featurecla == "River")
                		return _.template(tooltipTemplate, { name: d.properties.name + " River" } );
                    else
                    	return _.template(tooltipTemplate, { name: d.properties.name } );
                }
            }
        })
        .choropleth({topoJson: mapUnit}, {feature: 'ca'})
        .choropleth({topoJson: mapUnit}, {feature: 'lakes_ca'})
        .choropleth({topoJson: mapUnit}, {feature: 'lakes_supp'})
        .choropleth({topoJson: mapUnit}, {feature: 'rivers_large'})
        .choropleth({topoJson: mapUnit}, {feature: 'rivers_small'})
        .tooltip()
        .render();
    })
});
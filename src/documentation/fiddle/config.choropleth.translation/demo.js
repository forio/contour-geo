$(function () {
    d3.json('http://forio.com/tools/contour/geo/world.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .choropleth({topoJson: mapUnit}, {
            feature: 'countries', 
			center: [-122, 37], 
			translation: [300,400] 
		})
        .render();
    })
});
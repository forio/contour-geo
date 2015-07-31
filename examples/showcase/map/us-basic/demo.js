$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/us.json', function(mapUnit) {
        new Contour({
            el: '.myMap',
            USMap: {
                feature: 'counties',
                fill: function (a) {
                    return '#ddd';
                }
            }
        })
        .geo()
        .USMap(mapUnit)
        .render();
    });
});
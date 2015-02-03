$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/us-all.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .geo()
        .map(mapUnit, {
            fill: function(geom) {
                if (geom.id in ('NC','ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY')) {
                    return '#fff';
                } else {
                    return '#000';
                }
            }
        })
        .render();
    });
});
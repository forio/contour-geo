$(function () {
    d3.json('http://forio.com/tools/contour/geo/maps/us-all.json', function(mapUnit) {
        new Contour({
            el: '.myMap'
        })
        .geo()
        .map(mapUnit, {
            fill: function(geom) {
                if (['NC','ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY'].indexOf(geom.id) !== -1) {
                    return 'blue';
                } else {
                    return 'gray';
                }
            }
        })
        .render();
    });
});
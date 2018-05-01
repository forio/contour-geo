import Contour from 'contour';


var isGeoPointsArray = function (data) {
    return Array.isArray(data) && Array.isArray(data[0]) && data[0].length === 2 && data[0].every(function (x) { return !isNaN(+x); });
};

/**
* Provides a geographical 'frame' for the Contour instance.
*
* This is required for all visualizations displayed in a geographical format -- maps, choropleths, specialized small-states callouts, etc. (Adding `.geo` to your Contour instance is loosely analogous to adding `.cartesian()`, which supplies the Cartesian frame for bar, line, and area charts.)
*
* ###Example:
*
*   d3.json('world.json', function(mapUnit) {
*       new Contour({
*           el: '.myMap'
*       })
*       .geo()
*       .map(mapUnit, {center: [-122, 37]})
*       .render();
*   })
*
* @function geo
*/

Contour.expose('geo', function () {
    return {
        dataNormalizer: function (data, categories) {
            // check if data is geographical data, if so, normalizer it that way
            // otherwise use the default normalizer
            if (isGeoPointsArray(data)) {
                // array of tuples-> assume we have an array of longitues and lattitues
                return data;
            } else {
                // use default normalizer
                return Contour.utils.normalizeSeries.apply(this, arguments);
            }
        },

        isSupportedDataFormat: function (data) {
            return !isGeoPointsArray(data) && Contour.utils.isSupportedDataFormat(data);
        }
    };
});

export default Contour;
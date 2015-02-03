(function () {
    Contour.geo = Contour.geo || {};

    var isGeoPointsArray = function (data) {
        return _.isArray(data) && _.isArray(data[0]) && data[0].length === 2 && _.all(data[0], _.isNumber);
    };

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
                    return _.nw.normalizeSeries.apply(this, arguments);
                }
            },

            isSupportedDataFormat: function (data) {
                return !isGeoPointsArray(data) && _.nw.isSupportedDataFormat(data);
            }
        };
    });
})();

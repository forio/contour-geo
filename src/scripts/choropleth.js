import Contour from 'contour';


const defaults = {
    // don't add to output documentation until this is different from map.js
    /*
    choropleth: {
    }
    */
};

const choropleth = function (data, layer, options) {
    this.ensureDefaults(options, 'map');

    options.map = options.map || {};
    Contour.utils.merge(options.map, options.choropleth);

    return this.map.renderer.call(this, data, layer, options);
};

choropleth.defaults = defaults;

// don't add to output documentation until this is different from map.js

Contour.export('choropleth', choropleth);

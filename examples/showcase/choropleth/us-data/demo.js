$(function () {

   // people per 2013 census / km^2 (per Wikipedia)
    var populationDensity = { CA: 95.0, TX: 39.1, NY: 161.0, FL: 140.8, IL: 89.6, OH: 109.3, GA: 67.1, MI: 67.6, NC: 78.2, NJ: 467.2, VA: 80.8, WA: 40.5, MA: 331.3, AZ: 22.5, IN: 70.8, TN: 60.8, MO: 33.9, MD: 235.8, WI: 40.9, MN: 26.3, CO: 19.6, AL: 36.9, SC: 61.3, LA: 41.3, KY: 43.0, OR: 15.8, OK: 21.7, PA: 110.2, CT: 286.7, IA: 21.4, MS: 24.6, AR: 22.0, UT: 13.6, KS: 13.7, NV: 9.8, NM: 6.6, NE: 9.4, WV: 29.8, ID: 7.5, HI: 84.4, ME: 16.6, NH: 57.1, RI: 392.7, MT: 2.7, DE: 183.4, SD: 4.3, AK: 0.5, ND: 4.0, VT: 26.3, WY: 2.3 };

    // map the population density number to a color class
    var colorScale = d3.scale.quantize()
        .domain([0, 468])
        .range(d3.range(9)
        .map(function(i) { return "q" + i + "-9"; }));

    var numberFormatter = d3.format(',.0f');
    var tooltipTemplate = _.template('<span class="population"><%= population %></span><span class="stateName"><%= name %></span>');

    d3.json('http://forio.com/tools/contour/geo/maps/us-all.json', function (us) {
        new Contour({
            el: '.myMap',
            tooltip: {
                formatter: function (d, i, j) {
                    return tooltipTemplate({ name: d.properties.name, population: numberFormatter(populationDensity[d.id]) });
                }
            }
        })
        .geo()
        .USMap(us, {
            cssClass: function (d) {
                return colorScale(populationDensity[d.id]);
            }
        })
        .smallStatesCallouts()
        .tooltip()
        .render();
    });
});
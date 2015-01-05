(function () {
    'use strict';

    /**
    * Adds callouts for several of the smaller states on the East Coast of the US.
    *
    * This visualization requires `.map()` and a `projection` of `albers` or `albersUsa`. It is suitable for use with the default `us.json` and `us-all.json` TopoJSON files included with Contour-Geo. 
    *
    * ### Example:
    *
    *       d3.json('us-all.json', function (us) {
    *           new Contour({ el: '.map' })
    *               .map(us, { projection: d3.geo.albersUsa() })
    *               .smallStatesCallouts()
    *               .render()
    *       });
    *
    * @name smallStatesCallouts(data, options)
    * @param {object} data The data (topology) to be rendered with this visualization. This must be in TopoJSON format. By default takes the data from the map that is also part of this Contour instance.
    * @param {object} options (Optional) Configuration options particular to this visualization that override the defaults.
    */

    Contour.export('smallStatesCallouts', function (data, layer, options) {
        var smallStates = ['NH', 'VT', 'MA', 'RI', 'CT', 'NJ', 'DE', 'MD'];
        var width = options.chart.plotWidth;
        var height = options.chart.plotHeight;
        var scaleRatio = options.map.scaleRatio;

        var projection = d3.geo.albersUsa()
            .scale(options.map.scale || width * scaleRatio)
            .translate([width / 2, height / 2]);

        var path = d3.geo.path()
            .projection(projection);

        var getCentroid = function (element) {
            var bbox = element.getBoundingClientRect();

            return [bbox.left + bbox.width/2, bbox.top + bbox.height/2];
        };

        var map = this.svg.select('#states');
        var rectHeight = 20;
        var rectWidth = 20;
        var rectPadding = 5;
        var offsetY = 70;

        function newCallout(d, index) {
            var node = d3.select(this);
            var origState = map.select('#' + d);
            var origClass = origState.attr('class');
            var origFill = origState.attr('fill');
            var origStroke = origState.attr('stroke');
            var centroid = path.centroid(origState.node().__data__);
            var line = node.append('line')
                .attr('x1', centroid[0])
                .attr('y1', centroid[1]);

            var textBox = node.append('g')
                .attr('transform', function () {
                    return 'translate(' + (width - rectWidth) + ',' + (offsetY + rectHeight * index + (rectPadding - 1) * index) + ')';
                });

            var tbCentroid = getCentroid(textBox.node());

            line.attr('x2', tbCentroid[0])
                .attr('y2', tbCentroid[1]);

            textBox.append('rect')
                .datum(origState.node().__data__)
                .attr('x', 0)
                .attr('y', 0)
                .attr('width', rectWidth)
                .attr('height', rectHeight)
                .attr('class', origClass)
                .attr('fill', origFill)
                .attr('stroke', origStroke);

            textBox.append('text')
                .text(d)
                .attr('y', rectHeight / 2)
                .attr('dy', '.31em')
                .attr('x', rectWidth / 2);
        }

        var g = layer.selectAll('.small-state-callout').data(smallStates);

        g.enter().append('g')
            .attr('class', 'small-state-callout')
            .each(newCallout);
    });
})();

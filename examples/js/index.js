(function () {

    var baseContourVersion =  '0.9.107';
    var contourVersion;
    var samples = [
        'choropleth/california',
        'choropleth/us-basic',
        'choropleth/us-data',
        'choropleth/us-small-states',
        'choropleth/world',
    ];

    contourVersion = getContourVersion();

    buildMenu(samples);
    doRouting();

    function getContourVersion() {
        if (!/ver=/.test(window.location.search)) {
            return baseContourVersion;
        }

        var version = window.location.search.match(/ver=(\d+\.\d+\.\d+)/);
        return version[1] || baseContourVersion;
    }

    function onSampleLoad() {
        var height = $(this.contentDocument).height();
        $(this).height(height);
    }

    function doRouting() {
        var hash = document.location.hash.replace('#', '');
        if (hash.length) {
            loadSamples(hash, onSampleLoad);
        }
    }

    function buildMenu(data) {
        var items = [];
        var curPalette = 'palette-1';

        $.each(data, function (i, d) {
            var li = $('<li>').text(d).attr('data-path', d);
            items.push(li);
        });

        var ul = $('<ul>').addClass('list-unstyled');
        ul.append(items).appendTo('.menu');
        ul.on('click', 'li', function () {
            var path = $(this).data('path');
            document.location.hash = '#/' + path;
            loadSamples(path);
        });

        $('.palette-selector').on('change', function () {
            var iframe = d3.select('iframe').node();
            var newPalette = 'palette-' + $(this).val();

            d3.select(iframe.contentDocument)
                .selectAll('.series')
                    .classed(curPalette, false)
                    .classed(newPalette, true);

            curPalette = newPalette;
        });
    }

    function loadSamples(path, onLoad) {
        var fullPath = 'showcase' + path;
        var frame = $('#sample');

        $('.chart-id').text(path);

        $.get(fullPath + '/demo.html', function (res) {
            var iframe = frame.get(0);
            var contents = [];
            var doc;

            if (iframe.contentDocument) {
                doc = iframe.contentDocument;
            } else if (iframe.contentWindow) {
                doc = iframe.contentWindow.document;
            } else {
                doc = iframe.document;
            }

            // set up the onload callback... this is where the caller can resize the iframe
            $(iframe).on('load', onLoad);

            // set the base tag so data is loaded from the correct path
            contents.push('<base href="' + window.location.pathname + fullPath +'/">');
            // now we start adding stuff
            // add jquery and the demo css to the head first
            contents.push('<script src="../../../js/vendor/jquery.js"></script>');
            // force the correct versions of contour
            res = res.replace(/(https?:\/\/forio\.com\/tools\/contour\/)([\w\d\.\-\_]+)/g, function ($1, $2, $3) {
                return $2 + contourVersion + '/' + $3;
            });

            // now add the html
            contents.push(res);

            // add the css after the html so we get the demo.css to have priority over
            // the default contour.css
            contents.push('<link rel="stylesheet" href="demo.css">');
            contents.push('<script src="demo.js"></script>');

            // now write everything the iframes document
            doc.open();
            doc.writeln(contents.join(''));
            doc.close();
        });
    }

})();

    google.charts.load('current', {'packages':['geochart']});
    google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
          ['continent'],
          ['North America'],
          ['Europe'],
          ['Korea'],
          ['China'],
          ['Southeast Asia'],
          ['Oceania']
        ]);

        var options = {
            displayMode: 'text',
            backgroundColor: '#95a5a6',
            enableRegionInteractivity: true

    };



        var chart = new google.visualization.GeoChart(document.getElementById('map'));

        chart.draw(data, options);
    }

    google.charts.Marker(doThisThing, 'mouseover');

    function doThisThing() {
        var options = {
            backgroundColor: 'blue'
        };
    }

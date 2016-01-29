google.charts.load('current', {'packages':['geochart']});
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {

        var data = google.visualization.arrayToDataTable([
          ['region'],
          ['North America'],
          ['Europe'],
          ['Korea'],
          ['China'],
          ['Southeast Asia'],
          ['Oceania']
        ]);

        var options = {
            displayMode: 'text',
            backgroundColor: '#95a5a6'

    };

        var chart = new google.visualization.GeoChart(document.getElementById('map'));

        chart.draw(data, options);
      }

    

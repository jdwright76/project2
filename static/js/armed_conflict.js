// // Creating map object
// var myMap = L.map("map", {
//     center: [0.000000, 0.000000],
//     zoom: 2.5
<<<<<<< HEAD
// });;
=======
// });

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 20,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(myMap);
>>>>>>> 13f39b8d375888bf5ce984fe51bcd5664d4ac9d7


// Grab data with d3
d3.json("static/js/data.json", function(data) {
<<<<<<< HEAD
    console.log(data);
});
=======
    consol.log(data)


}); { <
    style > #chartdiv {
        width: 100 % ;
        height: 600 px
    };

    <
    /style>

    <!-- Resources -->
    <
    script src = "https://www.amcharts.com/lib/4/core.js" > < /script> <
    script src = "https://www.amcharts.com/lib/4/maps.js" > < /script> <
    script src = "https://www.amcharts.com/lib/4/geodata/worldLow.js" > < /script> <
    script src = "https://www.amcharts.com/lib/4/themes/animated.js" > < /script>

    // <!-- Chart code -->
    <
    script >
        am4core.ready(function(data) {

                // Themes begin
                am4core.useTheme(am4themes_animated);
                // Themes end

                // Create map instance
                var chart = am4core.create("chartdiv", am4maps.MapChart);

                var title = chart.titles.create();
                title.text = "[bold font-size: 20]Population of the World in 2011[/]\nsource: Gapminder";
                title.textAlign = "middle";

                var latlong = {
                    for (var i = 0; i < mapData.length; i++) {
                        mapData[i].latitude = latlong[mapData[i].id].latitude;
                        mapData[i].longitude = latlong[mapData[i].id].longitude;
                    }

                    // Set map definition
                    chart.geodata = am4geodata_worldLow;

                    // Set projection
                    chart.projection = new am4maps.projections.Miller();

                    // Create map polygon series
                    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
                    polygonSeries.exclude = ["AQ"];
                    polygonSeries.useGeodata = true;
                    polygonSeries.nonScalingStroke = true;
                    polygonSeries.strokeWidth = 0.5;

                    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
                    imageSeries.data = mapData;
                    imageSeries.dataFields.value = "value";

                    var imageTemplate = imageSeries.mapImages.template;
                    imageTemplate.propertyFields.latitude = "latitude";
                    imageTemplate.propertyFields.longitude = "longitude";
                    imageTemplate.nonScaling = true

                    var circle = imageTemplate.createChild(am4core.Circle);
                    circle.fillOpacity = 0.7;
                    circle.propertyFields.fill = "color";
                    circle.tooltipText = "{name}: [bold]{value}[/]";

                    imageSeries.heatRules.push({
                        "target": circle,
                        "property": "radius",
                        "min": 4,
                        "max": 30,
                        "dataField": "value"
                    })

                }); // end am4core.ready()
            <
            /script>

            <!-- HTML -->
            <
            div id = "chartdiv" > < /div>

        });
>>>>>>> 13f39b8d375888bf5ce984fe51bcd5664d4ac9d7

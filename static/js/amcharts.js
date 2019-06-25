am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    var title = chart.titles.create();
    title.text = "[bold font-size: 20]Population of the World in 2011[/]\nsource: Gapminder";
    title.textAlign = "middle";

    var latlong = {
        "AD": {
            "latitude": 42.5,
            "longitude": 1.5
        },
        "AE": {
            "latitude": 24,
            "longitude": 54
        },
        "AF": {
            "latitude": 33,
            "longitude": 65
        },
        "AG": {
            "latitude": 17.05,
            "longitude": -61.8
        },
        "AI": {
            "latitude": 18.25,
            "longitude": -63.1667
        },
        "AL": {
            "latitude": 41,
            "longitude": 20
        },
        "AM": {
            "latitude": 40,
            "longitude": 45
        },
        "AN": {
            "latitude": 12.25,
            "longitude": -68.75
        },
        "AO": {
            "latitude": -12.5,
            "longitude": 18.5
        },
        "AP": {
            "latitude": 35,
            "longitude": 105
        },
        "AQ": {
            "latitude": -90,
            "longitude": 0
        },
        "AR": {
            "latitude": -34,
            "longitude": -64
        },
        "AS": {
            "latitude": -14.3333,
            "longitude": -170
        },
        "AT": {
            "latitude": 47.3333,
            "longitude": 13.3333
        },
        "AU": {
            "latitude": -27,
            "longitude": 133
        },
        "AW": {
            "latitude": 12.5,
            "longitude": -69.9667
        },
        "AZ": {
            "latitude": 40.5,
            "longitude": 47.5
        },
        "BA": {
            "latitude": 44,
            "longitude": 18
        },
        "BB": {
            "latitude": 13.1667,
            "longitude": -59.5333
        },
        "BD": {
            "latitude": 24,
            "longitude": 90
        },
        "BE": {
            "latitude": 50.8333,
            "longitude": 4
        },
        "BF": {
            "latitude": 13,
            "longitude": -2
        },
        "BG": {
            "latitude": 43,
            "longitude": 25
        },
        "BH": {
            "latitude": 26,
            "longitude": 50.55
        },
        "BI": {
            "latitude": -3.5,
            "longitude": 30
        },
        "BJ": {
            "latitude": 9.5,
            "longitude": 2.25
        },
        "BM": {
            "latitude": 32.3333,
            "longitude": -64.75
        },
        "BN": {
            "latitude": 4.5,
            "longitude": 114.6667
        },
        "BO": {
            "latitude": -17,
            "longitude": -65
        },
        "BR": {
            "latitude": -10,
            "longitude": -55
        },
        "BS": {
            "latitude": 24.25,
            "longitude": -76
        },
        "BT": {
            "latitude": 27.5,
            "longitude": 90.5
        },
        "BV": {
            "latitude": -54.4333,
            "longitude": 3.4
        },
        "BW": {
            "latitude": -22,
            "longitude": 24
        },
        "BY": {
            "latitude": 53,
            "longitude": 28
        },
        "BZ": {
            "latitude": 17.25,
            "longitude": -88.75
        },
        "CA": {
            "latitude": 54,
            "longitude": -100
        },
        "CC": {
            "latitude": -12.5,
            "longitude": 96.8333
        },
        "CD": {
            "latitude": 0,
            "longitude": 25
        },
        "CF": {
            "latitude": 7,
            "longitude": 21
        },
        "CG": {
            "latitude": -1,
            "longitude": 15
        },
        "CH": {
            "latitude": 47,
            "longitude": 8
        },
        "CI": {
            "latitude": 8,
            "longitude": -5
        },
        "CK": {
            "latitude": -21.2333,
            "longitude": -159.7667
        },
        "CL": {
            "latitude": -30,
            "longitude": -71
        },
        "CM": {
            "latitude": 6,
            "longitude": 12
        },
        "CN": {
            "latitude": 35,
            "longitude": 105
        },
        "CO": {
            "latitude": 4,
            "longitude": -72
        },
        "CR": {
            "latitude": 10,
            "longitude": -84
        },
        "CU": {
            "latitude": 21.5,
            "longitude": -80
        },
        "CV": {
            "latitude": 16,
            "longitude": -24
        },
        "CX": {
            "latitude": -10.5,
            "longitude": 105.6667
        },
        "CY": {
            "latitude": 35,
            "longitude": 33
        },
        "CZ": {
            "latitude": 49.75,
            "longitude": 15.5
        },
        "DE": {
            "latitude": 51,
            "longitude": 9
        },
        "DJ": {
            "latitude": 11.5,
            "longitude": 43
        },
        "DK": {
            "latitude": 56,
            "longitude": 10
        },
        "DM": {
            "latitude": 15.4167,
            "longitude": -61.3333
        },
        "DO": {
            "latitude": 19,
            "longitude": -70.6667
        },
        "DZ": {
            "latitude": 28,
            "longitude": 3
        },
        "EC": {
            "latitude": -2,
            "longitude": -77.5
        },
        "EE": {
            "latitude": 59,
            "longitude": 26
        },
        "EG": {
            "latitude": 27,
            "longitude": 30
        },
        "EH": {
            "latitude": 24.5,
            "longitude": -13
        },
        "ER": {
            "latitude": 15,
            "longitude": 39
        },
        "ES": {
            "latitude": 40,
            "longitude": -4
        },
        "ET": {
            "latitude": 8,
            "longitude": 38
        },
        "EU": {
            "latitude": 47,
            "longitude": 8
        },
        "FI": {
            "latitude": 62,
            "longitude": 26
        },
        "FJ": {
            "latitude": -18,
            "longitude": 175
        },
        "FK": {
            "latitude": -51.75,
            "longitude": -59
        },
        "FM": {
            "latitude": 6.9167,
            "longitude": 158.25
        },
        "FO": {
            "latitude": 62,
            "longitude": -7
        },
        "FR": {
            "latitude": 46,
            "longitude": 2
        },
        "GA": {
            "latitude": -1,
            "longitude": 11.75
        },
        "GB": {
            "latitude": 54,
            "longitude": -2
        },
        "GD": {
            "latitude": 12.1167,
            "longitude": -61.6667
        },
        "GE": {
            "latitude": 42,
            "longitude": 43.5
        },
        "GF": {
            "latitude": 4,
            "longitude": -53
        },
        "GH": {
            "latitude": 8,
            "longitude": -2
        },
        "GI": {
            "latitude": 36.1833,
            "longitude": -5.3667
        },
        "GL": {
            "latitude": 72,
            "longitude": -40
        },
        "GM": {
            "latitude": 13.4667,
            "longitude": -16.5667
        },
        "GN": {
            "latitude": 11,
            "longitude": -10
        },
        "GP": {
            "latitude": 16.25,
            "longitude": -61.5833
        },
        "GQ": {
            "latitude": 2,
            "longitude": 10
        },
        "GR": {
            "latitude": 39,
            "longitude": 22
        },
        "GS": {
            "latitude": -54.5,
            "longitude": -37
        },
        "GT": {
            "latitude": 15.5,
            "longitude": -90.25
        },
        "GU": {
            "latitude": 13.4667,
            "longitude": 144.7833
        },
        "GW": {
            "latitude": 12,
            "longitude": -15
        },
        "GY": {
            "latitude": 5,
            "longitude": -59
        },
        "HK": {
            "latitude": 22.25,
            "longitude": 114.1667
        },
        "HM": {
            "latitude": -53.1,
            "longitude": 72.5167
        },
        "HN": {
            "latitude": 15,
            "longitude": -86.5
        },
        "HR": {
            "latitude": 45.1667,
            "longitude": 15.5
        },
        "HT": {
            "latitude": 19,
            "longitude": -72.4167
        },
        "HU": {
            "latitude": 47,
            "longitude": 20
        },
        "ID": {
            "latitude": -5,
            "longitude": 120
        },
        "IE": {
            "latitude": 53,
            "longitude": -8
        },
        "IL": {
            "latitude": 31.5,
            "longitude": 34.75
        },
        "IN": {
            "latitude": 20,
            "longitude": 77
        },
        "IO": {
            "latitude": -6,
            "longitude": 71.5
        },
        "IQ": {
            "latitude": 33,
            "longitude": 44
        },
        "IR": {
            "latitude": 32,
            "longitude": 53
        },
        "IS": {
            "latitude": 65,
            "longitude": -18
        },
        "IT": {
            "latitude": 42.8333,
            "longitude": 12.8333
        },
        "JM": {
            "latitude": 18.25,
            "longitude": -77.5
        },
        "JO": {
            "latitude": 31,
            "longitude": 36
        },
        "JP": {
            "latitude": 36,
            "longitude": 138
        },
        "KE": {
            "latitude": 1,
            "longitude": 38
        },
        "KG": {
            "latitude": 41,
            "longitude": 75
        },
        "KH": {
            "latitude": 13,
            "longitude": 105
        },
        "KI": {
            "latitude": 1.4167,
            "longitude": 173
        },
        "KM": {
            "latitude": -12.1667,
            "longitude": 44.25
        },
        "KN": {
            "latitude": 17.3333,
            "longitude": -62.75
        },
        "KP": {
            "latitude": 40,
            "longitude": 127
        },
        "KR": {
            "latitude": 37,
            "longitude": 127.5
        },
        "KW": {
            "latitude": 29.3375,
            "longitude": 47.6581
        },
        "KY": {
            "latitude": 19.5,
            "longitude": -80.5
        },
        "KZ": {
            "latitude": 48,
            "longitude": 68
        },
        "LA": {
            "latitude": 18,
            "longitude": 105
        },
        "LB": {
            "latitude": 33.8333,
            "longitude": 35.8333
        },
        "LC": {
            "latitude": 13.8833,
            "longitude": -61.1333
        },
        "LI": {
            "latitude": 47.1667,
            "longitude": 9.5333
        },
        "LK": {
            "latitude": 7,
            "longitude": 81
        },
        "LR": {
            "latitude": 6.5,
            "longitude": -9.5
        },
        "LS": {
            "latitude": -29.5,
            "longitude": 28.5
        },
        "LT": {
            "latitude": 55,
            "longitude": 24
        },
        "LU": {
            "latitude": 49.75,
            "longitude": 6
        },
        "LV": {
            "latitude": 57,
            "longitude": 25
        },
        "MA": {
            "latitude": 32,
            "longitude": -5
        },
        "MC": {
            "latitude": 43.7333,
            "longitude": 7.4
        },
        "MD": {
            "latitude": 47,
            "longitude": 29
        },
        "ME": {
            "latitude": 42.5,
            "longitude": 19.4
        },
        "MG": {
            "latitude": -20,
            "longitude": 47
        },
        "MH": {
            "latitude": 9,
            "longitude": 168
        },
        "MK": {
            "latitude": 41.8333,
            "longitude": 22
        },
        "ML": {
            "latitude": 17,
            "longitude": -4
        },
        "MM": {
            "latitude": 22,
            "longitude": 98
        },
        "MN": {
            "latitude": 46,
            "longitude": 105
        },
        "MO": {
            "latitude": 22.1667,
            "longitude": 113.55
        },
        "MP": {
            "latitude": 15.2,
            "longitude": 145.75
        },
        "MQ": {
            "latitude": 14.6667,
            "longitude": -61
        },
        "MR": {
            "latitude": 20,
            "longitude": -12
        },
        "MS": {
            "latitude": 16.75,
            "longitude": -62.2
        },
        "MT": {
            "latitude": 35.8333,
            "longitude": 14.5833
        },
        "MU": {
            "latitude": -20.2833,
            "longitude": 57.55
        },
        "MV": {
            "latitude": 3.25,
            "longitude": 73
        },
        "MW": {
            "latitude": -13.5,
            "longitude": 34
        },
        "MX": {
            "latitude": 23,
            "longitude": -102
        },
        "MY": {
            "latitude": 2.5,
            "longitude": 112.5
        },
        "MZ": {
            "latitude": -18.25,
            "longitude": 35
        },
        "NA": {
            "latitude": -22,
            "longitude": 17
        },
        "NC": {
            "latitude": -21.5,
            "longitude": 165.5
        },
        "NE": {
            "latitude": 16,
            "longitude": 8
        },
        "NF": {
            "latitude": -29.0333,
            "longitude": 167.95
        },
        "NG": {
            "latitude": 10,
            "longitude": 8
        },
        "NI": {
            "latitude": 13,
            "longitude": -85
        },
        "NL": {
            "latitude": 52.5,
            "longitude": 5.75
        },
        "NO": {
            "latitude": 62,
            "longitude": 10
        },
        "NP": {
            "latitude": 28,
            "longitude": 84
        },
        "NR": {
            "latitude": -0.5333,
            "longitude": 166.9167
        },
        "NU": {
            "latitude": -19.0333,
            "longitude": -169.8667
        },
        "NZ": {
            "latitude": -41,
            "longitude": 174
        },
        "OM": {
            "latitude": 21,
            "longitude": 57
        },
        "PA": {
            "latitude": 9,
            "longitude": -80
        },
        "PE": {
            "latitude": -10,
            "longitude": -76
        },
        "PF": {
            "latitude": -15,
            "longitude": -140
        },
        "PG": {
            "latitude": -6,
            "longitude": 147
        },
        "PH": {
            "latitude": 13,
            "longitude": 122
        },
        "PK": {
            "latitude": 30,
            "longitude": 70
        },
        "PL": {
            "latitude": 52,
            "longitude": 20
        },
        "PM": {
            "latitude": 46.8333,
            "longitude": -56.3333
        },
        "PR": {
            "latitude": 18.25,
            "longitude": -66.5
        },
        "PS": {
            "latitude": 32,
            "longitude": 35.25
        },
        "PT": {
            "latitude": 39.5,
            "longitude": -8
        },
        "PW": {
            "latitude": 7.5,
            "longitude": 134.5
        },
        "PY": {
            "latitude": -23,
            "longitude": -58
        },
        "QA": {
            "latitude": 25.5,
            "longitude": 51.25
        },
        "RE": {
            "latitude": -21.1,
            "longitude": 55.6
        },
        "RO": {
            "latitude": 46,
            "longitude": 25
        },
        "RS": {
            "latitude": 44,
            "longitude": 21
        },
        "RU": {
            "latitude": 60,
            "longitude": 100
        },
        "RW": {
            "latitude": -2,
            "longitude": 30
        },
        "SA": {
            "latitude": 25,
            "longitude": 45
        },
        "SB": {
            "latitude": -8,
            "longitude": 159
        },
        "SC": {
            "latitude": -4.5833,
            "longitude": 55.6667
        },
        "SD": {
            "latitude": 15,
            "longitude": 30
        },
        "SE": {
            "latitude": 62,
            "longitude": 15
        },
        "SG": {
            "latitude": 1.3667,
            "longitude": 103.8
        },
        "SH": {
            "latitude": -15.9333,
            "longitude": -5.7
        },
        "SI": {
            "latitude": 46,
            "longitude": 15
        },
        "SJ": {
            "latitude": 78,
            "longitude": 20
        },
        "SK": {
            "latitude": 48.6667,
            "longitude": 19.5
        },
        "SL": {
            "latitude": 8.5,
            "longitude": -11.5
        },
        "SM": {
            "latitude": 43.7667,
            "longitude": 12.4167
        },
        "SN": {
            "latitude": 14,
            "longitude": -14
        },
        "SO": {
            "latitude": 10,
            "longitude": 49
        },
        "SR": {
            "latitude": 4,
            "longitude": -56
        },
        "ST": {
            "latitude": 1,
            "longitude": 7
        },
        "SV": {
            "latitude": 13.8333,
            "longitude": -88.9167
        },
        "SY": {
            "latitude": 35,
            "longitude": 38
        },
        "SZ": {
            "latitude": -26.5,
            "longitude": 31.5
        },
        "TC": {
            "latitude": 21.75,
            "longitude": -71.5833
        },
        "TD": {
            "latitude": 15,
            "longitude": 19
        },
        "TF": {
            "latitude": -43,
            "longitude": 67
        },
        "TG": {
            "latitude": 8,
            "longitude": 1.1667
        },
        "TH": {
            "latitude": 15,
            "longitude": 100
        },
        "TJ": {
            "latitude": 39,
            "longitude": 71
        },
        "TK": {
            "latitude": -9,
            "longitude": -172
        },
        "TM": {
            "latitude": 40,
            "longitude": 60
        },
        "TN": {
            "latitude": 34,
            "longitude": 9
        },
        "TO": {
            "latitude": -20,
            "longitude": -175
        },
        "TR": {
            "latitude": 39,
            "longitude": 35
        },
        "TT": {
            "latitude": 11,
            "longitude": -61
        },
        "TV": {
            "latitude": -8,
            "longitude": 178
        },
        "TW": {
            "latitude": 23.5,
            "longitude": 121
        },
        "TZ": {
            "latitude": -6,
            "longitude": 35
        },
        "UA": {
            "latitude": 49,
            "longitude": 32
        },
        "UG": {
            "latitude": 1,
            "longitude": 32
        },
        "UM": {
            "latitude": 19.2833,
            "longitude": 166.6
        },
        "US": {
            "latitude": 38,
            "longitude": -97
        },
        "UY": {
            "latitude": -33,
            "longitude": -56
        },
        "UZ": {
            "latitude": 41,
            "longitude": 64
        },
        "VA": {
            "latitude": 41.9,
            "longitude": 12.45
        },
        "VC": {
            "latitude": 13.25,
            "longitude": -61.2
        },
        "VE": {
            "latitude": 8,
            "longitude": -66
        },
        "VG": {
            "latitude": 18.5,
            "longitude": -64.5
        },
        "VI": {
            "latitude": 18.3333,
            "longitude": -64.8333
        },
        "VN": {
            "latitude": 16,
            "longitude": 106
        },
        "VU": {
            "latitude": -16,
            "longitude": 167
        },
        "WF": {
            "latitude": -13.3,
            "longitude": -176.2
        },
        "WS": {
            "latitude": -13.5833,
            "longitude": -172.3333
        },
        "YE": {
            "latitude": 15,
            "longitude": 48
        },
        "YT": {
            "latitude": -12.8333,
            "longitude": 45.1667
        },
        "ZA": {
            "latitude": -29,
            "longitude": 24
        },
        "ZM": {
            "latitude": -15,
            "longitude": 30
        },
        "ZW": {
            "latitude": -20,
            "longitude": 30
        },
        "LY1": {
            "latitude": 32.117664,
            "longitude": 20.129275,
        },
        "LY2": {
            "latitude": 32.375352,
            "longitude": 15.092543,
        },
        "LY3": {
            "lat": 26.3351,
            "long": 17.2283,
        },
    };

    var mapData = [{
        "id": "LY1",
        "name": "Libya",
        "value": 1,
        "color": chart.colors.getIndex(1)
    }, {
        "id": "LY2",
        "name": "Libya",
        "value": 2,
        "color": chart.colors.getIndex(1)
    }, {
        "id": "LY3",
        "name": "Libya",
        "value": 3,
        "color": chart.colors.getIndex(1)
    }];

    // Add lat/long information to data
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

});
// end am4core.ready()
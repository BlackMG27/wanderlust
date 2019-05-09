import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import API from "../../utils/API";
//import the api file here
class Map extends React.Component {

    test = (codesFromDB) => {
        let globalLink;

        am4core.useTheme(am4themes_animated);

        // Create the map chart
        let chart = am4core.create("chartdiv", am4maps.MapChart);

        //check to make sure that the map is showing without error
        try {
            chart.geodata = am4geodata_worldLow;
        } catch (err) {
            chart.raiseCriticalError({
                "message": "Map geodata could not be loaded. Please download the latest <a href=\"https://ww" +
                        "w.amcharts.com/download/download-v4/\">amcharts geodata</a> and extract its cont" +
                        "ents into the same directory as your amCharts files."
            });
        }
        //sets the projection that will be used
        chart.projection = new am4maps
            .projections
            .Miller();

        const polygonSeries = chart
            .series
            .push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;
        polygonSeries.exclude = ["AQ"]; // Exclude Antractica
        polygonSeries.tooltip.fill = am4core.color("#000000");
        //

        let activeCodes = []
        for (var i = 0; i < codesFromDB.data.length; i++) {
            // console.log(codesFromDB.data[i].countryCode)
            activeCodes.push(codesFromDB.data[i].countryCode);

        }

        polygonSeries.data = activeCodes.map(codes => ({
            'id': codes,
            'color': am4core.color('#FECF6A'),
            'link': `/reviewlist/${codes}`
        }))

        const colorSet = new am4core.ColorSet();

        const polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.togglable = true;
        polygonTemplate.propertyFields.fill = "color";

        let currentActive;

        polygonTemplate
            .events
            .on('hit', function (ev) {
                const data = ev.target.dataItem.dataContext;
                if (data.link) {
                    globalLink = data.link;
                    window.location = globalLink;
                }
            })

        polygonTemplate
            .events
            .on('hit', event => {
                if (currentActive) {
                    currentActive.setState('default');
                }
                chart.zoomToMapObject(event.target);
                currentActive = event.target;
            })

        const hoverState = polygonTemplate
            .states
            .create("hover");
        hoverState.properties.fill = colorSet.getIndex(0);

        // Configure "active" state
        const activeState = polygonTemplate
            .states
            .create("active");
        activeState.properties.fill = colorSet.getIndex(8);

        // Create a zoom control
        const zoomControl = new am4maps.ZoomControl();
        chart.zoomControl = zoomControl;
        zoomControl.slider.height = 100;

        // Add button to zoom out
        const home = chart
            .chartContainer
            .createChild(am4core.Button);
        home.label.text = "Home";
        home.align = "right";
        home
            .events
            .on("hit", function (ev) {
                chart.goHome();
            });
    }

    componentDidMount() {

        API
            .findAllCodes()
            .then(codesFromDB => this.test(codesFromDB))
        // this.test()
    }
    render() {

        //shows the actual map
        return (
            <div id="chartdiv"></div>
        )
    }

}

export default Map;
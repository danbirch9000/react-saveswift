import * as am4core from "@amcharts/amcharts4/core";

import * as am4charts from "@amcharts/amcharts4/charts";

export const buildChart = chart => {

  // Set input format for the dates
  chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";

  // Create axes
  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  chart.yAxes.push(new am4charts.ValueAxis());

  // Create series
  let series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "value";
  series.dataFields.dateX = "date";
  series.tooltipText = "{value}";
  series.strokeWidth = 2;
  series.minBulletDistance = 15;

  // Drop-shaped tooltips
  series.tooltip.background.cornerRadius = 20;
  series.tooltip.background.strokeOpacity = 0;
  series.tooltip.pointerOrientation = "vertical";
  series.tooltip.label.minWidth = 40;
  series.tooltip.label.minHeight = 40;
  series.tooltip.label.textAlign = "middle";
  series.tooltip.label.textValign = "middle";

  // Make bullets grow on hover
  let bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.strokeWidth = 2;
  bullet.circle.width = 10;
  bullet.circle.height = 10;
  bullet.circle.radius = 4;
  bullet.circle.fill = am4core.color("#fff");

  let bullethover = bullet.states.create("hover");
  bullethover.properties.scale = 1.3;
  // Make a panning cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "panXY";
  chart.cursor.xAxis = dateAxis;
  chart.cursor.snapToSeries = series;

  dateAxis.start = 0;
  dateAxis.keepSelection = true;

  return chart;
};
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {buildChart} from "../../config/amcharts-utils";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {observer} from "mobx-react";
import { uuid } from "uuidv4";

am4core.useTheme(am4themes_animated);

const LineChart = observer((props) => {
  const chartId = uuid();
  useEffect(() => {
    let chart = am4core.create("account-chart-"+chartId, am4charts.XYChart);
    chart.data = props.chartData;
    chart = buildChart(chart);
  });

  return (
    <div id={`account-chart-${chartId}`}
      style={{ width: "100%", height: "500px" }} />
  );
});

LineChart.propTypes = {
  icon: PropTypes.string
};

export default LineChart;
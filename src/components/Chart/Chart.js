import React from "react";

import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {
  // Identify maximum value in dataPoints array, first create an array of values, then use Math.max to find the maximum value
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // use the spread operator to pass the values as individual arguments to Math.max
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

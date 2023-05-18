import React from "react";
import Chart from "../Chart/Chart";
import RoundCurrency from "../Utils/RoundCurrency";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expense of props.items) {
    const expenseMonth = expense.date.toLocaleString("en-US", { month: "short" });
    console.log("expenseMonth " + expenseMonth);
    console.log("expense.amount " + RoundCurrency(expense.amount));
    // update month in array
    for (const dataPoint of chartDataPoints) {
      if (dataPoint.label === expenseMonth) {
        dataPoint.value += RoundCurrency(expense.amount);
        console.log("dataPoint.label " + dataPoint.label + " dataPoint.value " + dataPoint.value);
      }
    }
    //        chartDataPoints[expenseMonth].value += expense.amount;
  }
  // calculate max value
  let maxValue = 0;
  for (const dataPoint of chartDataPoints) {
    console.log("dataPoint.label " + dataPoint.label + " dataPoint.value " + dataPoint.value);
    if (RoundCurrency(dataPoint.value) > RoundCurrency(maxValue)) {
      maxValue = Number(dataPoint.value);
    }
  }
  console.log("MaxValue " + maxValue);

  return <Chart dataPoints={chartDataPoints} maxValue={maxValue} />;
};

export default ExpensesChart;

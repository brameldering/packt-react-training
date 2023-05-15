import Expenses from "./components/Expenses/Expenses";
// import React from "react";

const App = () => {
  const expenses = [
    { id: 1, date: new Date(2023, 3, 31), title: "Insurance", amount: 132.12 },
    { id: 2, date: new Date(2023, 5, 1), title: "Birds", amount: 1232.82 },
    { id: 3, date: new Date(2023, 5, 12), title: "Health", amount: 1882.22 },
    { id: 4, date: new Date(2022, 8, 12), title: "Juno", amount: 382.22 },
  ];

  return (
    <div>
      <h2>Expense List</h2>
      <Expenses items={expenses} />
    </div>
  );

  // Traditional React JavaScript
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Expense list React"),
  //   React.createElement(Expenses, { items: expenses }, "")
  // );
};

export default App;

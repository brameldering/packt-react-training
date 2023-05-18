import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import Chart from "./components/Chart/Chart";

const initExpenses = [
  { id: 1, date: new Date(2023, 3, 31), title: "Insurance", amount: 132.12 },
  { id: 2, date: new Date(2023, 5, 1), title: "Birds", amount: 1232.82 },
  { id: 3, date: new Date(2023, 5, 12), title: "Health", amount: 1882.22 },
  { id: 4, date: new Date(2022, 8, 12), title: "Juno", amount: 382.22 },
];

const App = () => {
  const [expenses, setExpenses] = useState(initExpenses);
  const [dataPoints, setDataPoints] = useState([]);

  const calculateNextId = () => {
    let nextId = 1;
    // loop through the expenses array and find the highest id
    expenses.forEach((expense) => {
      if (expense.id > nextId) {
        nextId = expense.id;
      }
    });
    // add 1 to the highest id to get the next id
    nextId += 1;
    return nextId;
  };

  const addExpenseHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    // test that input is valid
    const d = new Date(enteredExpenseData.date);
    if (
      !enteredExpenseData.title ||
      isNaN(enteredExpenseData.amount) ||
      !(d instanceof Date && !isNaN(d))
    ) {
      return;
    }
    const nextId = calculateNextId();
    const newExpense = {
      ...enteredExpenseData,
      id: nextId,
    };
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

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

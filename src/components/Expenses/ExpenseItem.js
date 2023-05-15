import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem({ item }) {
  const [title, setTitle] = useState(item.title);

  const clickHandler = () => {
    console.log("clicked!!");
    setTitle("Updated");
  };

  return (
    <Card className='expense-item'>
      <div>
        <ExpenseDate date={item.date} />
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${item.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

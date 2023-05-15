import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

export default function Expenses(props) {
  return (
    <Card className='expenses'>
      {props.items.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </Card>
  );
}

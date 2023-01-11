import Card from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList(props) {
  const items = props.items.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        price={item.price}
      />
    );
  });

  return <Card className="expenses">{items}</Card>;
}

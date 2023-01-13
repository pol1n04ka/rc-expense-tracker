import { useState } from "react";
import Card from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpenseList.css";
import ExpensesFilter from "./ExpsensesFilter";

export default function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  const items = filteredItems.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        amount={item.amount}
      />
    );
  });

  const returnItems = (items) => {
    return items.length === 0 ? <p>No expenses to show</p> : items;
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      {returnItems(items)}
    </Card>
  );
}

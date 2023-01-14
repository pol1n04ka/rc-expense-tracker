import { useState } from "react";
import Card from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";
import "./ExpenseList.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpsensesFilter";

export default function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  console.log(filteredItems);

  const items = filteredItems.map((item) => {
    return (
      <li key={item.id}>
        <ExpenseItem
          // key={item.id}
          title={item.title}
          date={item.date}
          amount={item.amount}
        />
      </li>
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
      <ExpensesChart expenses={filteredItems} />
      <ul>{returnItems(items)}</ul>
    </Card>
  );
}

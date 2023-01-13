import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Car insurance",
    date: new Date(2022, 1, 22),
    amount: 295.12,
  },
  {
    id: "e2",
    title: "Toilet paper",
    date: new Date(2022, 4, 5),
    amount: 30.0,
  },
  {
    id: "e3",
    title: "New PC",
    date: new Date(2023, 0, 12),
    amount: 4500.0,
  },
  {
    id: "e4",
    title: "New table",
    date: new Date(2023, 0, 5),
    amount: 500.0,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseList items={expenses} />
    </div>
  );
}

export default App;

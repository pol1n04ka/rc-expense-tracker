import "./App.css";
import { ExpenseItem } from "./components/ExpenseItem";

const expenses = [
  {
    id: "e1",
    title: "Toilet paper",
    date: new Date(2002, 1, 22),
    price: 295.12,
  },
  {
    id: "e2",
    title: "Toilet paper",
    date: new Date(20015, 4, 5),
    price: 295.12,
  },
  {
    id: "e3",
    title: "Toilet paper",
    date: new Date(2004, 7, 15),
    price: 295.12,
  },
  {
    id: "e4",
    title: "Toilet paper",
    date: new Date(2003, 2, 11),
    price: 295.12,
  },
];

function returnExpense(expense) {
  console.log(expense.date);
  return (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      date={expense.date}
      price={expense.price}
    />
  );
}

function App() {
  return (
    <div className="App">
      {expenses.map((expense) => returnExpense(expense))}
    </div>
  );
}

export default App;

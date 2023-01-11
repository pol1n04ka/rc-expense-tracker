import "./App.css";
import { ExpenseItem } from "./components/ExpenseItem";

function App() {
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

  const returnExpence = (expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        date={expense.date}
        price={expense.price}
      />
    );
  };

  return (
    <div className="App">
      {expenses.map((expense) => returnExpence(expense))}
    </div>
  );
}

export default App;

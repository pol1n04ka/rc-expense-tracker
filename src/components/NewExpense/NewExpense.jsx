import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const saveExpenseHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsShown(false);
  };

  let [isShown, setIsShown] = useState(false);

  const cancelBtnHandler = () => {
    setIsShown(false);
  };

  const showBtnHandler = () => {
    setIsShown(true);
  };

  const form = (
    <ExpenseForm
      onSubmitNewExpense={saveExpenseHandler}
      onCancel={cancelBtnHandler}
    />
  );

  const showBtn = <button onClick={showBtnHandler}>Add new expense</button>;

  return <div className="new-expense">{isShown ? form : showBtn}</div>;
}

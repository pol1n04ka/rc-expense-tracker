import "./ExpenseItem.css";

export function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date.toString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">${props.price}</p>
      </div>
    </div>
  );
}

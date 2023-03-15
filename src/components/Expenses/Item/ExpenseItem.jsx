import ExpenseDate from "../Date/ExpenseDate.jsx";
import "./ExpenseItem.css"
const ExpenseItem = ({expenseData}) => {

  return (
    <div className="expense-item">
      <div>
        <ExpenseDate expenseData={expenseData}/>
      </div>
        <div className="expense-item-description">
          <h2>{expenseData.item}</h2>
        </div>
        <div className="expense-item-price"> $ 
           {expenseData.price}
        </div>
    </div>
  )
}

export default ExpenseItem

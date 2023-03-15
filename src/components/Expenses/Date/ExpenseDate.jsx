
import "./ExpenseDate.css"
const ExpenseDate = ({expenseData}) =>{

    // const month=months[expenseData.date.getMonth()];
    const month =expenseData.date.toLocaleString("en-us",{month:"long"})
    // console.log(month);
    const year= expenseData.date.getFullYear()
    const  date=expenseData.date.getDate();

    return(
        <div className="expense-date">
        <div className="expense-date-month">{month}</div>
        <div className="expense-date-year">{year}</div>
        <div className="expense-date-day">{date}</div>
      </div>
    )
}

export default ExpenseDate
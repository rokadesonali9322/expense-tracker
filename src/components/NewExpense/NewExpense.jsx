
import { useState } from 'react'
import ExpenseForm from './ExpeseForm'
import './NewExpense.css'

const NewExpense = ({handleExpenseData}) => {

  const [showExpenseForm,setExpenseForm]= useState(false)
  const NewExpenseData= (data) =>{
   handleExpenseData(data)
  }
  const formHandler = () =>{
      setExpenseForm(true)
  }
  return (
    <div className="new-expense">
      {
        !showExpenseForm &&
      <button onClick={formHandler}>Add New Expense</button>
      }
      { 
      showExpenseForm &&
     <ExpenseForm sendData={NewExpenseData} setExpenseForm={setExpenseForm}/>
      }
    </div>
  )
}

export default NewExpense

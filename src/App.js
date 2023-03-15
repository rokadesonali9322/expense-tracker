
import { useState } from 'react';
import './App.css';

import Expenses from './components/Expenses/Expenses/Expenses.jsx';
import NewExpense from './components/NewExpense/NewExpense';


const DummyData = [
  {
    id:"exp1",
    date:new Date(2022,5,23),
    item:"New TV",
    price:350.25,
  },
  {
    id:"exp2",
    date:new Date(2021,2,10),
    item:"Car Insuranse",
    price:250.25,
  },
  {
    id:"exp3",
    date:new Date(2021,4,18),
    item:"New Desk (Woden)",
    price:550.25,
  },
  {
    id:"exp3",
    date:new Date(2019,4,18),
    item:"motar (Woden)",
    price:450.25,
  },
  {
    id:"exp3",
    date:new Date(2022,4,18),
    item:"motar (Woden)",
    price:450.25,
  },
 
]

function App() {
  
  const [expenseData,setExpenseData]=useState(DummyData)
  // const months=["January", "February", "March", "April", "May", "June",
  // "July", "August", "September", "October", "November", "December" ];

  // console.log(expenseData[0].date);

  const handleExpenseData = (data) =>{
    console.log(data);
    setExpenseData([data,...expenseData])
  }
  return (
    <div>
   <NewExpense  handleExpenseData={handleExpenseData}/>
    <Expenses expenseData={expenseData}/>
      </div>
  )
}
export default App;

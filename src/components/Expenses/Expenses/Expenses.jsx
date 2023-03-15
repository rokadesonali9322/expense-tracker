import "./Expenses.css"
import ExpenseItem from "../Item/ExpenseItem.jsx";
import FilterExpense from "../Filter/FilterExpense";
import { useState } from "react";
import ChartExpense from "../ChartExpenses/ChartExpense";

const Expenses = ({expenseData}) =>{

  const [filterYear,setFilterYear] = useState("2021");
   const updateFilterYear = (year) =>{
      setFilterYear(year)
   }

   let FilterRecords = expenseData.filter((cul)=>{
    //  console.log(cul.date.getFullYear());
     return cul.date.getFullYear().toString() === filterYear 

   })
    return(
        <div className="expenses">
          <FilterExpense updateFilterYear={updateFilterYear} filterYear={filterYear}/>

         <ChartExpense  FilterRecords={FilterRecords}/>
           { 
            FilterRecords.length > 0 ? 
               (FilterRecords.map((row,index)=>{
                  return(
                    <ExpenseItem expenseData={row}  key={index}/>
                  )
              })): ( <h1 style={{textAlign:"center",color:"white"}}>NO DATA FOUND</h1>)
            }
        </div>
    )
}

export default Expenses;
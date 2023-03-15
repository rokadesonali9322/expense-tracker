import "./ExpenseForm.css"
import { useState } from "react";
const ExpenseForm = (props) => {
  
  const [title,setTitle]=useState("Test");
  const[amount,setAmount]=useState(0);
  const[date,setDate]=useState("")

  // const  [data,setData]=useState({
  //   title:"Test",
  //   amount:10,
  //   date:""
  // })

  // handel title
  const updateTitle= (e) =>{
    setTitle(e.target.value)
    // console.log(e.target.value);
    // setData({...data,title:e.target.value})
  }
  const handleSubmitform = (e) =>{
    e.preventDefault();
    // console.log(title,amount,date);
    const data={
      id:Math.random().toString(),
     item: title,
     price: amount,
      date:new Date(date)
    }
  // console.log(data);
  props.sendData(data);

   setTitle("");
   setAmount("")
   setDate("")

   props.setExpenseForm(false)
  }
//   const details={
//    title: data.title,
//    amount:data.amount,
//     date:data.date
//   }
// console.log(details);
// }
  return (
     <form onSubmit={handleSubmitform}>
      <div className="new-expense_controls" >
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text"  value={title}  onChange={updateTitle}/>
          {/* <input type="text"  value={data.title}  onChange={updateTitle}/> */}
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
          {/* <input type="number" value={data.amount} onChange={(e)=>setData({...data,amount:e.target.value}) }/> */}
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
          {/* <input type="date" value={data.date} onChange={(e)=>setData({...data,date:e.target.value})}/> */}
        </div>
      </div>
      <div className='new-expense_actions'>
         <button onClick={()=>props.setExpenseForm(false)}>Cancel</button>
          <button type="submit">Add Expense</button>
         
      </div>
      </form>
    
   
  )
}

export default ExpenseForm

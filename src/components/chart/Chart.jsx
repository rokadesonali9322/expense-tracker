import ChartBar from "./ChartBar.jsx"
import "./Chart.css"

const Chart = ((props) => {
    // console.log(props.chartDataPoints);
    let priceArray =props.chartDataPoints.map(row=>row.price)
    // console.log(priceArray);
    let MaxPrice = Math.max(...priceArray);
    console.log(MaxPrice);


    return (
   <div className="Chart">
       {
           props.chartDataPoints.map((cul,index)=>{
               return (
                <ChartBar  label={cul.label} value={cul.price} MaxValue={MaxPrice} key={index}/>
               )
           })
       }
   </div>
    )
})

export default Chart
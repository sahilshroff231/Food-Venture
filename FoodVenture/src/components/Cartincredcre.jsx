import React, { useEffect, useState } from 'react'
import './cartincredecre.css'

function Cartincredcre({id,amount}) {
   
    const [qtyamount, setqtyAmount] = useState(amount);
    // useEffect(()=>{
    //     fetch("http://localhost:3000/cart").then((res)=>{
    //         return res.json();
    //     }).then((resp)=>{
    //         setAmount(resp.amount);
    //     }).catch((error)=>{
    //         console.log("error",error)
    //     })
    // })
    const decreaseAmount = () => {
        
        let newAmount = qtyamount - 1; 
        if (newAmount>=1){
        updateAmount(newAmount);
       
        }
    };

    const increaseAmount = () => {
       
        let newAmount = qtyamount + 1;
        if(newAmount<=10){
        updateAmount(newAmount);
     
        }
        
    };

   
    

    const updateAmount = (newAmount) => {
        fetch(`http://localhost:3000/cart/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: newAmount})
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new error("Failed to update amount");
            }
        })
        .catch(error => {
            console.error("Error updating amount:", error);
        }).then(data=>{
            setqtyAmount(data.amount);
            console.log('amount updated')
        }).catch(error=>{
            console.error("error",error)
        })
    };


  return (
      <>

         <div className="">
              <div className="d-flex ">
                <button className='border-0 px-2 py-0 bg-dark-90 rounded   deckbtn' onClick={()=>decreaseAmount()}>-</button>
                <div className="p-2 fs-5 fw-bold" >{qtyamount}</div>
                <button  className="border-0 px-2 p bg-dark-90 rounded  deckbtn"onClick={()=>increaseAmount()}>+</button>
              </div>
         </div>
      </>

  )
}

export default Cartincredcre
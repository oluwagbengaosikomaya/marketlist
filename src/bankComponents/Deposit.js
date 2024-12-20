import React from 'react';
import {useState} from "react";

const Deposit = ({bal, xyz})=>{
    const[amount, setAmount] = useState("")  // this state will track what ever is typed in deposit amount.
    function handleChange(e){
        //console.log(e.target.value)
        setAmount(e.target.value)

    }

    return(
        <div className="row">

        <div className="col-md-6">

            <input type="number" placeholder="Deposit amount" value={amount} onChange={handleChange}/>


            <button className="btn btn-primary" onClick={function(){
                    xyz(Number(amount))

            }}>Deposit</button>
            <p> Your current balance is: <strong>{bal}</strong></p>


        </div>

        </div>


    )

}
export default Deposit

import Balance from "./bankComponents/Balance";
import Deposit from "./bankComponents/Deposit";
import Withdraw from "./bankComponents/Withdraw";
import Broke from "./bankComponents/Broke";
import Rich from "./bankComponents/Rich";
import {useState} from "react";

function App () {

   // const balance = 2500; dont do this . since balance changes, use hook (useState) to manage it
        //useState(): import
       const [balance, setBalance] = useState(0); //syntax for managing state.
    //    setBalance(1000) dont update a state like this....
    //    setBalance(balance + 1000) : this should be activated by an event,
        function handleWithdraw(amount){
            //check if they are eligible to withdraw
            if(balance >=amount){
                setBalance(balance - amount)
            }else{
                alert("your balance is too low")
            }         
        }

        function handleDeposit(amount){
            setBalance(balance + amount);

        }



        return(


            <div className="container">

                {/* <button onClick={handleDeposit}>Deposit</button>
                <button onClick={handleWithdraw }>Withdraw</button> */}

                <h1>Bank App</h1>
            {/* {display components based on conditions} */}



            {

                balance > 1000 ? <Rich/> : <Broke/>  
            }


                <Balance bal = {balance}/>
                <Withdraw bal = {balance} abc = {handleWithdraw}/>
                <Deposit bal = {balance} xyz= {handleDeposit}/>

         </div>
        )



}
export default App;
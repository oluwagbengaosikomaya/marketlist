import AddItem from "./listerComponentb/AddItem"
import Content from "./listerComponentb/Content"
import Footer from "./listerComponentb/Footer"
import Header from "./listerComponentb/Header"
import {useState} from "react"


const ListerB = () => {
   

  return (

    <div className="container">
        <h1>Lister B: context api</h1>
        <Header/>


        <AddItem/>


        <Content/>


        <Footer/>
    </div>
 )
}

export default ListerB;
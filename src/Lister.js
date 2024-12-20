import AddItem from "./listerComponent/AddItem"
import Content from "./listerComponent/Content"
import Footer from "./listerComponent/Footer"
import Header from "./listerComponent/Header"
import {useState} from "react"


const Lister = () => {
   

    const initialList = [
        {name: "Greek Bread", price:"2500",id:2},
        {name: "japan iphone", price:"8000",id:3},
        {name: "milan tissue", price:"3000", id:4},
        {name: "madrid beans", price:"7500",id:5}
    ];


    const[list, setList] = useState([initialList]);
    //this function receives product and add it to list state
    function addNewProduct(product){

        setList([product, ...list]);

    }

    //a fucntion that accepts id of product to delete and then delete
    function deleteItem(id){
        //filter the current state and filter out product that the id that was passed.
        const filteredProduct = list.filter(function(li){

                    return li.id !== id;
        })

            setList(filteredProduct)

    }

  return (

    <div className="container">

        <Header lists={list}/>


        <AddItem addNewProduct={addNewProduct}/>


        <Content lists={list} deleteItem={deleteItem}/>


        <Footer/>
    </div>
 )
}

export default Lister;
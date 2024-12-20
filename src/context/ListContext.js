import {createContext, useEffect, useState} from 'react'; //useState|useEffect|createContext()

const ListContext = createContext();



//a provider

const ListProvider = ({children}) => {
    //set up the state, set up all the function that the component needs


    //create  a fucntion check inside localStorage and see if there is any marketList in the local storage, if it is not there,it will return empty array.
    function fetchListFromLocalStorage(){

        const initialList = localStorage.getItem('marketList');
        const realList = initialList ? JSON.parse(initialList) : [];
        return realList;
    }


    const[list, setList] = useState(fetchListFromLocalStorage());
    //set up all method/functions that the components need.
        // useEffect will help us to update localstorage wherever a new list is created or deleted.

    useEffect(function(){

        //whenever the list changed, we will update the localstorage
        localStorage.setItem("marketList", JSON.stringify(list));
    }, [list])

    function addNewProduct(product){

        setList([product, ...list]);

    }
    function deleteItem(id){
        //filter the current state and filter out product that the id that was passed.
        const filteredProduct = list.filter(function(li){

                    return li.id !== id;
        })

            setList(filteredProduct)

    }
    return(

        <ListContext.Provider value={{list, addNewProduct, deleteItem}}>
            {children}

        </ListContext.Provider>
    )

}

export {ListContext, ListProvider}

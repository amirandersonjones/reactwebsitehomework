//imports at the top
import axios from "axios";
import { useState, useContext } from "react";
import { DataContext } from "../context/DataProvider";



//function definition for my component-return a single JSX element

const Shop = () => {

 /*
   1. Make an API call to our flask app - fethch or axios(we're going to use axios need to install)
   2. Set up a state variable for our products
   3. Set that state variable based on the results of our api call
   4. Set up conditional JSX templating such that if we have products we display them. Otherwise we display loading.

   */
   
    //state variable setup
    const [drinks, setDrinks] = useState(() => loadDrinkData());

   //make api call
   const getDrinkData = async () =>{
        let response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        return response.status === 2000 ? response.data : null
   }

    //loading the api call response data into our state variable
   const loadDrinkData = async () =>{
        let data = await getDrinkData();
        console.log(data, typeof data);
        //take this data and set our state variable with it
        setDrinks(data);
    }
   


    return(
        <h1>shop</h1>
    );          
}






//export that functional component
export default Shop;
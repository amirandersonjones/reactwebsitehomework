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
   
   //make api call
   const getDrinkData = async () =>{
        let response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        return response.status === 200 ? response.data : null
   }

    //loading the api call response data into our state variable
   const loadDrinkData = async () =>{
        let data = await getDrinkData();
        // console.log(data.drinks, typeof data.drinks);
        //take this data and set our state variable with it
        setDrinks(data.drinks);
    }
   
     //state variable setup
       //state variable setup
       const [drinks, setDrinks] = useState(() => loadDrinkData());


       const {cart, setCart} = useContext(DataContext);
   
       //function to purchase the drink (aka add to cart)
       const purchaseDrink = (drink) => {
           //add the drink to our cart object-CANNOT MUTATE THE STATE DIRECTLY
           //MAKE A COPY
           let mutableCart = {...cart}
           //MODIFY THE COPY
           //increase size by one
           mutableCart.size++;
           //increase total by drink price(default $5)
           mutableCart.total += 5;
           //if the drink is in the cart already, increase the quanitity by one, otherwise add the drink to the cart
           mutableCart.drinks[drink.idDrink] ?
           mutableCart.drinks[drinks.idDrink].quantity++ :
           console.log(drinks[drinks.idDrink])
           mutableCart.drinks[drink.idDrink]={'data': drink, 'quantity': 1};
           //testing console.log
           console.log(mutableCart);
           //SET STATE
           setCart(mutableCart);
       }
   


    return (
        <div className="container">
        <div className="row justify-content-center">
            <h1>AMIR'S COCKTAIL AND SALOON</h1>
        </div>
        <div className="row">
            {/* cards for each drink once the drinks have actually loaded */ }
            {typeof drinks === 'object' && !drinks.then ? drinks.map((drink, index) => {
                 return <div key={index} className="card m-3" style={{width: 18 + 'rem'}}>
                    <img src={drink.strDrinkThumb} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{drink.strDrink}</h5>  
                    </div>
                    <ul className="list-group list-group-flush">
                        <h4 className="list-group-item">Drink ID:</h4>
                        <li className="list-group-item">{drink.idDrink}</li>     
                    </ul>
                    <div className="card-body"> 
                    {<p className="card-link"><span className="float-left">$5</span><span className="float-right btn btn-sm btn-secondary" onClick={() => purchaseDrink(drink)}>Purchase</span></p> }
                    </div>
                </div>
            }) :
                <h1>Stirring up cocktails! Please hold...</h1>
            }
        </div>
    </div>
);
}



//export that functional component
export default Shop;
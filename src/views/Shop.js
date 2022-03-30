//imports at the top
import axios from "axios";
import { useState, useContext } from "react";




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
        console.log(data.drinks, typeof data.drinks);
        //take this data and set our state variable with it
        setDrinks(data.drinks);
    }
   
    //state variable setup
    const [drinks, setDrinks] = useState(() => loadDrinkData());

    return (
        <div className="container">
        <div className="row justify-content-center">
            <h1>AMIR'S COCKTAIL AND SALOON</h1>
        </div>
        <div className="row">
            {/* cards for each animal once the animals have actually loaded */ console.log(drinks, typeof drinks)}
            {typeof drinks === 'object' && !drinks.then ? drinks.map((drink, index) => {
                 return <div key={index} className="card m-3" style={{width: 18 + 'rem'}}>
                    <img src={drink.strDrinkThumb} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">dfdf</h5>
                        <h5 className="card-title font-italic">cdfdf</h5>
                        <p className="card-text">dfadfds</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">gg</li>
                        <li className="list-group-item">afdf</li>
                        <li className="list-group-item"><span className="float-left">fafd</span><span className="float-right">dfaf</span></li>
                    </ul>
                    <div className="card-body"> 
                        {/* <p className="card-link"><span className="float-left">${animal.price.toFixed(2)}</span><span className="float-right btn btn-sm btn-secondary" onClick={() => adoptAnimal(animal)}>Adopt</span></p> */}
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
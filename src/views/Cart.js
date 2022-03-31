import "../css/customCartStyling.css"
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"
import { Link } from "react-router-dom";

const Cart = () => {
    /* 
    1. Access to my cart and setCart context
    2. Clear the entire cart
    3. Add one more of an item
    4. Remove one of an item
    5. Remove all of a single item from my cart
    */
const { cart, setCart } = useContext(DataContext);
//this function doesnt need input
const clearCart = () => {
    setCart({size: 0, total: 0, drinks: {}}); //on click button down low
    // console.log(cart);
}

//increase quantity does need input.we also have to modify the cart so we have to mutate the cart
const increaseQuantity = idDrink => {
    //create a copy of current state.
    let mutableCart = {...cart};
    //modify the copy
    mutableCart.size++;
    console.log(mutableCart.idDrink)
    console.log(idDrink)
    mutableCart.total += 5;
    mutableCart.drinks[idDrink].quantity++;
    //set state
    console.log(mutableCart);//add it to onclick
    setCart(mutableCart)  
}

//decrease quantity//can start with what i had for increase quantity and go with just the inverse
const decreaseQuantity = idDrink => {
    //create a copy of current state.
    let mutableCart = {...cart};
    //modify the copy
    //same modification of overall cart size and total
    mutableCart.size--;
    // console.log(mutableCart.drinks)
    // console.log(id)
    mutableCart.total-= 5;
   // if more than one of that drink, decrease quantity
    // if only one of that drink, remove all info about that drink from the cart
    console.log(idDrink)
    mutableCart.drinks[idDrink].quantity > 1 ?
    mutableCart.drinks[idDrink].quantity-- :
    delete mutableCart.drinks[idDrink]
    // set the db right before we set the new state!
    console.log(mutableCart)
    setCart(mutableCart)
}
const removeItem = idDrink => {
    let mutableCart = {...cart};
    //modify the copy
    //reduce size of cart by quantity of this item
    mutableCart.size -= mutableCart.drinks[idDrink].quantity;
    //reduce the total of the cart by the quantity of this item times the price of the item
    mutableCart.total -= (mutableCart.drinks[idDrink].quantity*5);
    //remove the drink
    delete mutableCart.drinks[idDrink]
    //set state
    console.log(mutableCart)
    setCart(mutableCart);
}

return (
    <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
            <div className="col-md-8">
                <div className="p-2">
                    <h4>DRINKS AVAILABLE FOR PURCHASE:</h4>
                </div>
                {Object.values(cart.drinks).map((drink, index) => {
                    return <div key={index} className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                        <div className="mr-1"><img className="rounded" alt="" src={drink.strDrinkThumb} width="70" /></div>
                        <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{drink.strDrink}</span>
                            <div className="d-flex flex-row product-desc">
                                <div className="size mr-1"><span className="font-weight-bold">Thanks for choosing this cocktail</span></div>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center qty">
                            <i className="fa fa-minus text-danger" onClick={() => {decreaseQuantity(drink.data.idDrink)}}></i>
                            <h5 className="text-grey mt-1 mr-1 ml-1">{drink.quantity}</h5>
                            <i className="fa fa-plus text-success" onClick={() => {increaseQuantity(drink.data.idDrink)}}></i>
                        </div>
                        <div>
                            <h5 className="text-grey">$5 ea.</h5>
                        </div>
                        <div className="d-flex align-items-center"><i className="fa fa-trash mb-1 text-danger" onClick={() => {removeItem(drink.data.idDrink)}}></i></div>
                    </div>
                })
                }
                <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                    <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">Total:</span>
                    </div>
                    <div>
                        <h4 className="text-grey">${cart.total.toFixed(2)}</h4>
                    </div>
                    <div className="d-flex align-items-center"><button className="btn btn-sm btn-danger" onClick={clearCart}>Clear Cart</button></div>
                </div>
                <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><Link to="/" className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button" disabled>Checkout</Link></div>
            </div>
        </div>
    </div>
)
}

export default Cart;
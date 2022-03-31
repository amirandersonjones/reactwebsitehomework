import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { DataContext } from '../context/DataProvider';

//function definition for my component-return a single JSX element
const Navbar = props => {
  const {cart} = useContext(DataContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">AMIR'S COCKTAIL AND SALOON</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" to="/Shop">Shop</Link>
      <Link className="nav-item nav-link" to="/Gallery">Gallery</Link>
      <Link className="nav-item nav-link" to="/Cart">Cart</Link>
      <Link className="nav-item nav-link disabled" to="#">Disabled</Link>
      <li className="nav-item active">
        {cart.size === 0 ?
        <Link className="btn btn-info" to="/shop"><i className="fa fa-shopping-cart"></i></Link> :
        <Link className="btn btn-info" to="/cart"><i className="fa fa-shopping-cart mr-1"></i>{cart.size} | ${cart.total.toFixed(2)}</Link>
        }
      </li>
    </div>
  </div>
</nav>
       
    );
}

//export that functional component
export default Navbar;
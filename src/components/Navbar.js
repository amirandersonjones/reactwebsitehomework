import { Link } from 'react-router-dom';
import { useEffect } from 'react';

//function definition for my component-return a single JSX element
const Navbar = props => {
    useEffect (() => {console.log('Navbar component redered or re-rendered!')});

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">AMIR'S SHOP</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" to="/Shop">Shop</Link>
      <Link className="nav-item nav-link" to="/Gallery">Gallery</Link>
      <Link className="nav-item nav-link disabled" to="#">Disabled</Link>
    </div>
  </div>
</nav>
       
    );
}

//export that functional component
export default Navbar;
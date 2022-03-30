import { Link } from 'react-router-dom';
import { useEffect } from 'react';

//function definition for my component-return a single JSX element
const Navbar = () => {
    useEffect (() => {console.log('Navbar component redered or re-rendered!')});

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">AMIR'S SHOP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
      <Link class="nav-item nav-link" to="/Shop">Shop</Link>
      <Link class="nav-item nav-link" to="/Gallery">Gallery</Link>
      <Link class="nav-item nav-link disabled" to="#">Disabled</Link>
    </div>
  </div>
</nav>
       
    );
}

//export that functional component
export default Navbar;
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider';
import { useAuth, useUser, useSigninCheck } from 'reactfire';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

//function definition for my component-return a single JSX element
const Navbar = props => {
   //gives our Navbar component access to the cart context
  const {cart} = useContext(DataContext);
  //gives our Navbar access to our auth system- useAuth hook from reactfire
  const auth = useAuth();

  //we also need to work with a 'user in this scenario and there are reactfire hooks for that
  //useUserhook to access a user object
  //useSigninCheck hook to help determing current user status.
  const { data:user } = useUser();
  const { signinStatus } = useSigninCheck();

   //set up functions to sign a user in or sign a user out//Firebase has documentation on how to do this with fetch
   const signin = async () => { //need to tie this to a button
    let provider = new GoogleAuthProvider();
    let u = await signInWithPopup(auth, provider)
    console.log(u)
}

const signout = async () =>{
  await signOut(auth).then(() => console.log('signed user out'));// the .then() isn't neccessary-ust there for testing/dev feedback
}

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">AMIR'S COCKTAIL AND SALOON</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav">
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
      </ul>
      <ul className='nav navbar-nav ml-auto'>
          { /*If a user is signed in, show a signout buttion and show their name
            If a user is not signed in, show a login button
            If the user is loading show something else*/
          signinStatus === 'loading' ?
            <li className="nav-item active mr-2">
              <button className="btn btn-info" disabled>Logging in...</button>
            </li> :
          user ?
              <>
                <li className="nav-item active ml-auto">
                  <p className="nav-link m-0">{user.displayName}</p>
                </li>
                <li className="nav-item active mr-2">
                  <button className="btn btn-info" onClick={signout}>Logout</button>
                </li>
              </>:
                <li className="nav-item active mr-2">
                  <button className="btn btn-info" onClick={signin}>Login</button>
                </li>
                }   
      </ul>
    </div>
</nav>
       
    );
}

//export that functional component
export default Navbar;
//imports at the top
import {useState, useEffect} from 'react';
import { useUser, useSigninCheck } from 'reactfire';





//function definition for my component-return a single JSX element
const Home = () => {

//access our user and their signin status
    //we also need to work with a 'user in this scenario and there are reactfire hooks for that
    //useUserhook to access a user object
    //useSigninCheck hook to help determing current user status.
    const { data:user } = useUser();
    const { signinStatus } = useSigninCheck();


    return (
        <>
        <div class="header-container">
            <div class="row justify-content-center">
                {user ?
                <h1>Welcome to Amir's Cocktail and Saloon, {user.displayName}!</h1> :
                <h1>Welcome to Amir's Cocktail and Saloon!</h1>
                }
            </div>
        </div>    
        
       </> 
     
       
    );
}
// export that functional component
export default Home;
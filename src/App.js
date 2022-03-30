import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Shop from './views/Shop';
import Gallery from './views/Gallery';

const App = () => {
   
  return (
   <div className='App'>
     <Navbar />
     <Routes>
       {/*Any "page" of my react app can be defined as a Route within my Routes here*/}
       <Route children path='/' element={<Home />} />
       <Route children path='/Shop' element={<Shop />} />
       <Route children path='/Gallery' element={<Gallery />} />
     </Routes>
   </div>
   );
 }
 
 export default App;
 

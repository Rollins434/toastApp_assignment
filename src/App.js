import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Components/Header';
import Special from './Components/Special';
import {  Navigate, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Dessert from './Components/Dessert';
import Beverage from './Components/Beverage';
import CartPage from './Components/CartPage';


const App = () => {
  return (
   <>
  <Routes>
  
    <Route path="/" element={<Navigate to='/special' />}/>
    <Route path='/special' element={<Special/>}/>
    <Route path="/main" element={<Main/>}/>
    <Route path="/dessert" element={<Dessert/>}/>
    <Route path="/beverage" element={<Beverage/>}/>
    <Route path="/cart" element={<CartPage/>}/>
  </Routes>
 
   </>
  )
}

export default App
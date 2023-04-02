import React from 'react'
import { Route,Routes,Navigate } from 'react-router-dom'

//pages
import Home from "../pages/Home"
import Allfood from "../pages/Allfoods"
import Fooddetaies from "../pages/foodDetailes"
import Cart from "../pages/cart"
import Checkout from "../pages/checkout"
import Watchlist from "../pages/watchlist"
import Contact from "../pages/contact"
import Register from '../pages/Register'

//auth
import Login from "../pages/Login"
import Signup from "../pages/Signup"
const Routers = () => {
  return (
    <Routes>
       <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/foods' element={<Allfood/>} />
        <Route path='/foods/id' element={<Fooddetaies/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/Watchlist' element={<Watchlist/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Register' element={<Register/>} />

        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        
    </Routes>
  )
}

export default Routers

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Navbar from './Components/Navbar'
import SearchBar from './Components/SearchBar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='px-4 sm:px-[5vm] md:px-[7vm] lg:px-[9vm]'>
      <Navbar />
      <SearchBar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/product/:productId' element={<Product />} />

      </Routes>


      <Footer/>


    </div>

    
  )
}

export default App
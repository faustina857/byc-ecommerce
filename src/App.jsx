import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import AllProducts from './pages/AllProducts'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import User from './pages/User'
import { CartProvider } from './context/CartContext'
import Verify from './pages/Verify'
import ProductDetails from './components/ProductDetails'
import Wishlist from './components/Wishlist'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/blog' element={<Blog/>}></Route>
          <Route path='/blogs/:id' element={<Blogs/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/allproducts' element={<AllProducts/>}></Route>
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>}></Route>
          <Route path="/user" element={<User/>}></Route>
          <Route path="/verify" element={<Verify/>}></Route>
          <Route path="/wishlist" element={<Wishlist/>}></Route>
          {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
        </Routes>
      </CartProvider>
      
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

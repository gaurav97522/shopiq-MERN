import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/carts/Cart'
import Navbar from './components/Navbar'
import Wishlist from './context/WishlistContext'
import Account from './pages/account/Account'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-950 via-slate-900 to-black">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

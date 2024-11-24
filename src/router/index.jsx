import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../pages/layout/Layout'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Return from '../pages/return/Return'
import Garant from '../pages/garant/Garant'
import Shipping from '../pages/shipping/Shipping'
import NotFound from '../pages/not-found/NotFound'
import Blogs from '../pages/blogs/Blogs'
import { memo } from 'react';
import Detail from '../pages/detail/Detail'
import Wishlist from '../pages/wishlist/Wishlist'
import Cart from '../pages/cart/Cart'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/return' element={<Return/>}/>
        <Route path='/garant' element={<Garant/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
        <Route path='/blog' element={<Blogs/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
  </Routes>
  )
}

export default memo(Router)
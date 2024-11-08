import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../home/Home'
import About from '../about/About'
import Contact from '../contact/Contact'
import Return from '../return/Return'
import Garant from '../garant/Garant'
import Shipping from '../shipping/Shipping'
import NotFound from '../not-found/NotFound'
import Blogs from '../blogs/Blogs'
import { memo } from 'react';

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
        </Route>
        <Route path='*' element={<NotFound/>}/>
  </Routes>
  )
}

export default memo(Router)
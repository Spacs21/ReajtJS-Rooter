import { useState } from 'react'
import './App.scss'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import { Route, Routes,  } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Return from './pages/return/Return'
import Garant from './pages/garant/Garant'
import Shipping from './pages/shipping/Shipping'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/return' element={<Return/>}/>
        <Route path='/garant' element={<Garant/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
      </Route>
      <Route path='*' element={<p>idi nahui</p>}/>
    </Routes>
    </>
  )
}

export default App

import React, { useState } from 'react'
import { useStateValue } from '../../context'
import Products from '../../components/products/Products';
import "./Wishlist.scss"
import { NavLink } from 'react-router-dom';

const Wishlist = () => {
    const [state, dispatch] = useStateValue()
    let stateChecker = state.wishlist.length
  return (
    <div className='container'>
      {
        stateChecker === 0 ?
        <div className='favorite'>
          <img src="https://uzum.uz/static/img/hearts.cf414be.png"/>
          <h2>Добавьте то, что понравилось</h2>
          <p>Нажмите на ♡ в товаре. Войдите в аккаунт и всё избранное сохранится</p>
          <NavLink to={"/"}><button>Главная</button></NavLink>
        </div>
        :
        <Products data={state.wishlist} text="Избранные товары"/>
      }
    </div>
  )
}

export default Wishlist
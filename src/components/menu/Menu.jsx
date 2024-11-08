import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Menu.scss"
import { memo } from 'react';

const Menu = () => {
  return (
    <div className="menu-holder">
         <div className='menu-show'>
            <div className="line"></div>
            <NavLink to={"about"}>О компании</NavLink>
            <NavLink to={"shipping"}>Доставка и оплата</NavLink>
            <NavLink to={"return"}>Возврат</NavLink>
            <NavLink to={"garant"}>Гарантии</NavLink>
            <NavLink to={"contact"}>Контакты</NavLink>
            <NavLink to={"blog"}>Блог</NavLink>
            <button className="menu-show__button">
                <span className="menu-show__icon">☰</span>
                <span>Каталог</span>
            </button>
            <div className="menu__contact">
                <span>8 (800) 890-46-56</span>
                <a href="#">Заказать звонок</a>
            </div>
        </div>
    </div>
  )
}

export default memo(Menu)
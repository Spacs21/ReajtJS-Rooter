import React, { useState, useMemo, useEffect } from 'react';
import { FaBars, FaSearch, FaHeart, FaChartBar, FaShoppingCart } from 'react-icons/fa';
import "./Header.scss"
import { AiOutlineHeart, AiOutlineBarChart } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/vector.png"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Menu from '../menu/Menu';
import { memo } from 'react';
import { useStateValue } from '../../context';
import axios from 'axios';
import Model from '../model/Model';

const Header = () => {
  const [isVisible, setVisible] = useState(false)
  const [state, dispatch] = useStateValue()
  const [isModel, setModel] = useState(false)

  const toggleMenu = useMemo(() => () => {
    setVisible(prev => !prev)
  }, [])

  const storageData = localStorage.getItem('storage');
  const parsedData = JSON.parse(storageData)
  const navigate = useNavigate()
  const handleClear = ()=>{
    localStorage.clear()
    navigate("/login")
  }


  return (
    
    <div className="holder">
      <div className="container">
          {
            isModel && <Model visibleModel={setModel}>
               <div className="modal">
                <div className="modal__content">
                  <div className="modal__user">
                    <img 
                      src={parsedData?.user} 
                      className="modal__avatar"
                    />
                    <h3 className="modal__username">{parsedData?.name}</h3>
                  </div>
                  <p className="modal__text">выйти из аккаунта</p>
                  <button className="modal__button" onClick={handleClear}>Выйти</button>
                </div>
               </div>
            </Model>
          }
          <header className="header">
            <div className="header__top-links">
              <div className="left">
                <NavLink to={"about"}>О компании</NavLink>
                <NavLink to={"shipping"}>Доставка и оплата</NavLink>
                <NavLink to={"return"}>Возврат</NavLink>
                <NavLink to={"garant"}>Гарантии</NavLink>
                <NavLink to={"contact"}>Контакты</NavLink>
                <NavLink to={"blog"}>Блог</NavLink>
              </div>
              <div className="right">
                <div className="right__contact">
                  <span>8 (800) 890-46-56</span>
                  <a href="#">Заказать звонок</a>
                </div>
              </div>
            </div>
            <div className="header__main">
              <div className="header__logo">
                <div className="menu" onClick={toggleMenu}>
                  <HiOutlineMenuAlt3 />
                </div>
                <img src={logo}/>
                <NavLink to={"/"}><h2>NORNLIGHT</h2></NavLink>
              </div>
              
              <div className="header__catalog">
                <div className="catalog-button">
                  <span className="catalog-icon">☰</span>
                  <span>Каталог</span>
                </div>
              </div>

              <div className="header__search">
                <input type="text" placeholder="Поиск по товарам" />
                <span className="search-icon"><FaSearch/></span>
              </div>

              <div className="header__icons">
                <div className="icon-wrapper special" onClick={()=> setModel(prev => !prev)}>
                  <img src={parsedData?.user} alt="" />
                  <span>{parsedData?.name}</span>
                </div>
                <div className="icon-wrapper cart">
                  <NavLink to={"/wishlist"}><AiOutlineHeart className="icon" /></NavLink>
                  <span>Избранное</span>
                  <span className="cart-badge">{state.wishlist.length}</span>
                </div>
                <div className="icon-wrapper cart">
                  <NavLink to={"/cart"}><BsCart className="icon" /></NavLink>
                  <span>Корзина</span>
                  <span className="cart-badge">{state.cart.length}</span>
                </div>
              </div>
            </div>
            <div className="menu__wrapper">
                {isVisible && <Menu  setVisible={setVisible} isVisible={isVisible}/>}
              </div>

            <div className="header__search media">
                <input type="text" placeholder="Поиск по товарам" />
                <span className="search-icon"><FaSearch/></span>
              </div>
        </header>
      </div>
    </div>
  );
};

export default memo(Header);

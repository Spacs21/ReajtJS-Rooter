import React from 'react';
import { FaBars, FaSearch, FaHeart, FaChartBar, FaShoppingCart } from 'react-icons/fa';
import "./Header.scss"
import { AiOutlineHeart, AiOutlineBarChart } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="holder">
      <div className="container">
          <header className="header">
            <div className="header__top-links">
              <div className="left">
                <NavLink to={"about"}>О компании</NavLink>
                <NavLink to={"shipping"}>Доставка и оплата</NavLink>
                <NavLink to={"return"}>Возврат</NavLink>
                <NavLink to={"garant"}>Гарантии</NavLink>
                <NavLink>Контакты</NavLink>
                <NavLink>Блог</NavLink>
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
                <div className="icon-wrapper">
                  <AiOutlineHeart className="icon" />
                  <span>Избранное</span>
                </div>
                <div className="icon-wrapper">
                  <AiOutlineBarChart className="icon" />
                  <span>Сравнение</span>
                </div>
                <div className="icon-wrapper cart">
                  <BsCart className="icon" />
                  <span>Корзина</span>
                  <span className="cart-badge">1</span>
                </div>
              </div>
            </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

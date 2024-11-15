import React, { memo, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';

const Menu = ({ setVisible, isVisible }) => {
  return (
    <div className="menu-holder">
      <div className="color">
        <div className={`menu-show ${isVisible ? 'open' : ''}`}>
          <NavLink to="about" onClick={() => setVisible(false)}>О компании</NavLink>
          <NavLink to="shipping" onClick={() => setVisible(false)}>Доставка и оплата</NavLink>
          <NavLink to="return" onClick={() => setVisible(false)}>Возврат</NavLink>
          <NavLink to="garant" onClick={() => setVisible(false)}>Гарантии</NavLink>
          <NavLink to="contact" onClick={() => setVisible(false)}>Контакты</NavLink>
          <NavLink to="blog" onClick={() => setVisible(false)}>Блог</NavLink>
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
    </div>
  );
};

export default memo(Menu);

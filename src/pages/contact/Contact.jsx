import React from 'react'
import "./Contact.scss"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import map from "../../assets/map.png"


const Contact = () => {
  return (
    <article>
        <div className="container">
            <div className="return">
                <div className="return__title">
                    <p><NavLink to={"/"}>Главная</NavLink><strong> <MdOutlineKeyboardArrowRight/>Гарантии</strong></p>
                    <h1>Контакты</h1>
                </div>
                <div className="return__text">
                <div className="return-policy">
                    <h2>8 (800) 890-46-56</h2>
                    <p>
                    Пн-Пт: 10:00 до 19:00 Сб-Вс: заказ через корзину Телефоны: 
                    </p>
                    </div>
                </div>
            </div>
            <div className="map">
                <img src={map}/>
            </div>
        </div>
    </article>
    
  )
}

export default Contact
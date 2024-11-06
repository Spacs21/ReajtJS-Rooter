import React from 'react'
import "./Shipping.scss"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import map from "../../assets/map.png"


const Shipping = () => {
  return (
    <article>
        <div className="container">
            <div className="return">
                <div className="return__title">
                    <p><NavLink to={"/"}>Главная</NavLink><strong> <MdOutlineKeyboardArrowRight/>Гарантии</strong></p>
                    <h1>Доставка и оплата</h1>
                </div>
                <div className="return__text">
                <div className="return-policy">
                    <h2>Доставка</h2>
                    <p>
                    Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель
                    </p>
                    <h2>Курьерская доставка</h2>
                    <p>
                    БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽. Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД
                    </p>
                    <h2>Самовывоз</h2>
                    <p>
                    Любой заказ можно забрать самостоятельно по адресу:  г. Москва, Дмитровское шоссе д.100с2
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

export default Shipping
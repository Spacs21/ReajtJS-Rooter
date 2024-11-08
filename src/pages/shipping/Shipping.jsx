import React from 'react'
import "./Shipping.scss"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import map from "../../assets/map.png"
import { memo } from 'react';


const Shipping = () => {
  return (
    <article>
        <div className="container">
            <div className="return">
                <div className="return__title">
                    <p><NavLink to={"/"}>Главная</NavLink><strong> <MdOutlineKeyboardArrowRight/>Доставка и оплата</strong></p>
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
        </div>
        <div className="container map">
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4047.0956477138607!2d69.20762732989965!3d41.220654787475105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1730894537591!5m2!1sru!2s"
                    width="100%"
                    height="672"
                    style={{ border: 0, borderRadius: 15 }}
                    allowFullScreen=""
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map Embed">
                </iframe>
            </div>
        </div>
    </article>
    
  )
}

export default memo(Shipping)
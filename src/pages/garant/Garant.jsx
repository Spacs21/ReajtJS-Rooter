import React from 'react'
import "./Garant.scss"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { memo } from 'react';


const Garant = () => {
  return (
    <article>
        <div className="container">
            <div className="return">
                <div className="return__title">
                    <p><NavLink to={"/"}>Главная</NavLink><strong> <MdOutlineKeyboardArrowRight/>Гарантии</strong></p>
                    <h1>Гарантии</h1>
                </div>
                <div className="return__text">
                <div className="return-policy">
                    <h2>Обмен и возврат по желанию покупателя</h2>
                    <p>
                    Все товары в магазине «NornLight» имеют гарантию. Она заявляется производителем и имеет определенный срок действия на различные группы товаров.
                    Если ваше изделие вышло из строя в течение гарантийного срока вы можете обратиться к нам и получить бесплатный ремонт. Для этого нужно:
                    Предоставить чек, накладную или сообщить почту или номер телефона, указанные при оформлении заказа.
                    Привезти товар к нам на склад или отправить его транспортной компанией.
                    После товар отправляется на экспертизу и ремонт. Если ремонт невозможен, мы обменяем изделие на аналогичное либо вернем деньги за покупку.
                    Обращаем внимание, что «А-Свет» не является сервисным центром, а выполняет роль посредника между клиентом и поставщиком.
                    Поэтому сроки проведения ремонта могут отличаться для товаров различных брендов.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </article>
  )
}

export default memo(Garant)
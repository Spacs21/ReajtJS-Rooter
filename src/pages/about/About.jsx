import React from "react";
import "./About.scss";
import { NavLink } from "react-router-dom";
import Brands from "../../components/brands/Brands";
import Blog from "../../components/blog/Blog";
import { memo } from "react";

const About = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="breadcrumb">
          <NavLink to={"/"}>Главная</NavLink> &gt; <strong>О компании</strong>
        </div>
        <h1>О компании</h1>
        <div className="about-content">
          <div className="stats">
            <div className="stat-card">
              <div className="stat-number">170+</div>
              <div className="stat-label">Товаров</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Довольных покупателей</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">170+</div>
              <div className="stat-label">Товаров</div>
            </div>
          </div>
          <div className="description">
            <p>
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников
              для освещения вашего дома или офиса. У нас вы найдете разнообразные модели
              светильников, от современных и стильных до классических и элегантных. Мы
              предлагаем качественные и надежные светильники от лучших производителей,
              которые подарят вам комфорт и уют.
            </p>
            <p>
              Покупая светильники в нашем интернет-магазине, вы получаете отличное
              соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы
              каждый клиент мог насладиться прекрасным светом и удобством покупок онлайн.
              Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с
              NORNLIGHT!
            </p>
            <p>
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют
            </p>
            <p>
            Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
            </p>
          </div>
        </div>
        <Brands/>
        <div className="blog__title">
          <div><h2>Блог</h2></div>
          <div><button>Перейти в блог</button></div>
        </div>
        <Blog/>
      </div>
    </div>
  );
};

export default memo(About);

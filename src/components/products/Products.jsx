import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Products.scss"
import Title from '../title/Title'
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import img1 from "../../assets/lamps.png"
import axios from '../../api';
import { useFetch } from '../../hooks/useFetch';
import { NavLink } from 'react-router-dom';
import Model from '../model/Model';


const Products = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const [ModelContent, SetModelContent] = useState(null)
    // const [isModelShow, setModelShow] = useState()

    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const {data, loading, error} = useFetch(`/products`)
    const products_data =  data?.map(pro => (
        <div className="products__box" key={pro.id}>
            <div className="products__box__image">
            <img src={pro.image} onClick={()=>SetModelContent(pro)}/>
            <div className="icon">
                <CiHeart />
            </div>
        </div>
        <div className="products__box__text">
            <NavLink  to={`product/${pro.id}`}><h3>{pro.title}</h3></NavLink>
            <div className="price">
            <p className='discount'>7 000₽</p>
                <div className='amount'>
                    <p>{pro.price}</p>
                </div>
                <div><button><FaCartShopping /></button></div>
            </div>
        </div>
    </div>
    ))
    console.log(Model);

  return (
    <div className='container'>
        <Title title="Популярные товары" text="Все товары →"/>
        <div className="products">
           {products_data}
        </div>
        {
        ModelContent &&
        <Model visibleModel={SetModelContent}>
            <div className='model__content'>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    // onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="model__swiper"
                >
                    <SwiperSlide><img src={ModelContent.image} alt="Model Content" /></SwiperSlide>
                    <SwiperSlide><img src={ModelContent.image} alt="Model Content" /></SwiperSlide>
                    <SwiperSlide><img src={ModelContent.image} alt="Model Content" /></SwiperSlide>
                </Swiper>
                <NavLink to={`product/${ModelContent.id}`}><button className="model__see-more">See More</button></NavLink>
            </div>
        </Model>
        }

    </div>
  )
}

export default Products
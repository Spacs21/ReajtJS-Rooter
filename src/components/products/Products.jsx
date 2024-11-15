import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Products.scss"
import Title from '../title/Title'
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import img1 from "../../assets/lamps.png"
import axios from '../../api';
import { useFetch } from '../../hooks/useFetch';
import { NavLink } from 'react-router-dom';
import Model from '../model/Model';
import { useStateValue } from '../../context';
import Loader from '../loader/Loader';


const Products = ({data, loading, error, text}) => {
    const [ModelContent, SetModelContent] = useState(null)
    const [state, dispatch] = useStateValue()
    console.log(data);

    const products_data =  data?.map(pro => (
        <div className="products__box" key={pro.id}>
            <div className="products__box__image">
            <img src={pro.image} onClick={()=>SetModelContent(pro)}/>
            <div className="icon" onClick={()=> dispatch({type: "ADD_WISHLIST", payload: pro})}>
                {
                    state.wishlist?.some(item => item.id === pro.id) 
                    ?
                    <FaHeart/>
                    :
                    <FaRegHeart/>
                }
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
  return (
    <div className='container'>
        {!data && <Loader/>}
        <Title title={text} text="Все товары →"/>
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
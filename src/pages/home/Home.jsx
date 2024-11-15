import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import "./Home.scss"
import light from "../../assets/light.png"
import Catalog from '../../components/catalog/Catalog';
import { memo } from 'react';
import Features from '../../components/features/Features';
import Products from '../../components/products/Products';
import Brands from '../../components/brands/Brands';
import Blog from '../../components/blog/Blog';
import Title from '../../components/title/Title';
import { useFetch } from '../../hooks/useFetch'

const Home = () => {
  const {data} = useFetch("products")
  return (
    <div className='content'>
      <div className="container new">
        <div className="slider">
          <Swiper
          cssMode={true}
          navigation={false}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="custom-swiper"
        >
          <SwiperSlide>
            <div className="swiper">
              <div className="text__content">
                <h1>Скидка 15% на все подвесные светильники <span>до 5 февраля</span></h1>
              </div>
              <div className="image">
                <img src={light}/>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper">
              <div className="text__content">
                <h1>Скидка 15% на все подвесные светильники <span>до 5 февраля</span></h1>
              </div>
              <div className="image">
                <img src={light}/>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
      </div>
      <Catalog/>
      <Features/>
      <Products data={data} text="Популярные товары"/>
      <Brands/>
      <div className="container">
        <Title title="Блог" text="Перейти в блог"/>
        <Blog/>
      </div>
    </div>
  )
}

export default memo(Home)
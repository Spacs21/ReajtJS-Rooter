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

const Home = () => {
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
    </div>
  )
}

export default memo(Home)
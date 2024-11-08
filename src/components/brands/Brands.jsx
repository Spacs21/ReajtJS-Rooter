import React from 'react'
import "./Brands.scss"
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import { memo } from 'react';

const Brands = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="brands">
                <div className="brands__title">
                    <h1>Только проверенные бренды</h1>
                </div>
                <div className="boxes">
                  <div className="box"><img src={img1} /></div>
                  <div className="box"><img src={img1} /></div>
                  <div className="box"><img src={img3} /></div>
                  <div className="box"><img src={img1} /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Brands)
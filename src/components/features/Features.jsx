import React from 'react'
import Title from '../title/Title'
import "./Features.scss"
import img1 from "../../assets/feat1.png"
import img2 from "../../assets/feat2.png"

const Features = () => {

  return (
    <div className='container'>
        <Title title="Почему NORNLIGHT?" text="О компании"/>
        <div className="features">
            <div className="features__box">
                <div className="features__box__image">
                    <img src={img1}/>
                </div>
                <div className="features__box__text">
                    <h3>Только проверенные бренды</h3>
                    <p>Бренды, проверенные временем и качеством</p>
                </div>
            </div>
            <div className="features__box">
                <div className="features__box__image">
                    <img src={img2}/>
                </div>
                <div className="features__box__text">
                    <h3>Самые низкие цены</h3>
                    <p>Ниже не будет нигде</p>
                </div>
            </div>
            <div className="features__box">
                <div className="features__box__image">
                    <img src={img1}/>
                </div>
                <div className="features__box__text">
                    <h3>Быстрая доствка</h3>
                    <p>Доставляем по всей РФза 1-10 дней</p>
                </div>
            </div>
            <div className="features__box">
                <div className="features__box__image">
                    <img src={img2}/>
                </div>
                <div className="features__box__text">
                    <h3>Большой ассортимент</h3>
                    <p>Более 1000 товаров</p>
                </div>
            </div>
        </div>
        <div className="btn">
            <button>О компании</button>
        </div>
    </div>
  )
}

export default Features
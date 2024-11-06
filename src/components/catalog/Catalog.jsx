import React from 'react';
import './Catalog.scss';
import image1 from "../../assets/lamps.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import image5 from "../../assets/image5.png"
import image6 from "../../assets/image6.png"

const Catalog = () => {
  return (
    <div className="container">
      <div className="catalog">
        <h2 className="catalog__title">
            <h2>Каталог</h2>
            <button className="catalog__button">Весь каталог →</button>
        </h2>
        <div className="catalog__grid">
          <div className="catalog-item">
            <div className="catalog-item__content">
              <div><h3 className="catalog-item__title">Люстры</h3></div>
             <div> <p className="catalog-item__price">От 540₽<span className="catalog-item__arrow">→</span></p></div>
             
            </div>
            <img src={image1} className="catalog-item__image" />
          </div>
          <div className="catalog-item">
            <div className="catalog-item__content">
              <div><h3 className="catalog-item__title">Люстры</h3></div>
             <div> <p className="catalog-item__price">От 540₽<span className="catalog-item__arrow">→</span></p></div>
             
            </div>
            <img src={image2} className="catalog-item__image" />
          </div>
          <div className="catalog-item">
            <div className="catalog-item__content">
              <div><h3 className="catalog-item__title">Люстры</h3></div>
             <div> <p className="catalog-item__price">От 540₽<span className="catalog-item__arrow">→</span></p></div>
             
            </div>
            <img src={image3} className="catalog-item__image" />
          </div>
          <div className="catalog-item">
            <div className="catalog-item__content">
              <div><h3 className="catalog-item__title">Люстры</h3></div>
             <div> <p className="catalog-item__price">От 540₽<span className="catalog-item__arrow">→</span></p></div>
             
            </div>
            <img src={image4} className="catalog-item__image" />
          </div>
          <div className="catalog-item">
            <div className="catalog-item__content">
              <div><h3 className="catalog-item__title">Люстры</h3></div>
             <div> <p className="catalog-item__price">От 540₽<span className="catalog-item__arrow">→</span></p></div>
             
            </div>
            <img src={image5} className="catalog-item__image" />
          </div>
          <div className="catalog-item">
            <div className="catalog-item__content">
              <div><h3 className="catalog-item__title">Люстры</h3></div>
             <div> <p className="catalog-item__price">От 540₽<span className="catalog-item__arrow">→</span></p></div>
             
            </div>
            <img src={image6} className="catalog-item__image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;

import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import icons from "../../assets/icons.png"
import { CiHeart } from "react-icons/ci";
import "./Product.scss"
import Loader from "../loader/Loader";

const Product = () => {
    const {id} = useParams()
    const {data, loading, error} = useFetch(`/products/${id}`)
    if (!data) return <Loader/>;
    
  return (
    <div className='container'>
        <div className="detail">
            <div className="detail__image">
                <img src={data?.image}/>
            </div>
            <div className="detail__text">
                <div className="detail__text__title">
                    <h1>{data?.title}</h1>
                </div>
                <div className="detail__text__info">
                    <div>
                        <p>Scott</p>
                        <p>Артикул : 7655-188</p>
                        <p className="stock">В наличии: {data?.inStock}</p>
                    </div>
                    <div className="icons"><img src={icons}/></div>
                </div>
                <div className="detail__text__price">
                    <h1>{data?.price}</h1>
                </div>
                <div className="descp">
                    <p>{data?.descp}</p>
                </div>

                <div className="detail__text__btn">
                    <button className='count'>- 1 +</button>
                    <button className='cart_btn'>В Корзину</button>
                    <button className='like'><CiHeart/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product
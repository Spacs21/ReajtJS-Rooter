import React, { useEffect, useState } from 'react'
import "./Products.scss"
import Title from '../title/Title'
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import img1 from "../../assets/lamps.png"
import axios from '../../api';
import { useFetch } from '../../hooks/useFetch';
import { NavLink } from 'react-router-dom';


const Products = () => {
    const {data, loading, error} = useFetch(`/products`)
    console.log(data);
    const products_data =  data?.map(pro => (
        <div className="products__box" key={pro.id}>
            <NavLink to={`product/${pro.id}`}>
            <div className="products__box__image">
            <img src={pro.image}/>
            <div className="icon">
                <CiHeart />
            </div>
        </div>
            </NavLink>
        <div className="products__box__text">
            <h3>{pro.title}</h3>
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
        <Title title="Популярные товары" text="Все товары →"/>
        <div className="products">
           {products_data}
        </div>
    </div>
  )
}

export default Products
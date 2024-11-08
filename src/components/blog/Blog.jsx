import React from 'react'
import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import blog3 from "../../assets/blog3.png"
import { GoArrowUpRight } from "react-icons/go";
import "./Blog.scss"
import { memo } from 'react';

const Blog = () => {
  return (
    // <div className="container">
        <div className="blogs">
            <div className="blogs__card">
                <img src={blog1}/>
                <div className="blogs__card__title">
                    <div>
                        <h3>Как правильно освещать дом снаружи?</h3>
                    </div>
                    <div className='blog_icon'><GoArrowUpRight /></div>
                </div>
                <p>01.01.2024</p>
            </div>
            <div className="blogs__card">
                <img src={blog2}/>
                <div className="blogs__card__title">
                    <div>
                        <h3>Как правильно освещать дом снаружи?</h3>
                    </div>
                    <div className='blog_icon'><GoArrowUpRight /></div>
                </div>
                <p>01.01.2024</p>
            </div>
            <div className="blogs__card">
                <img src={blog3}/>
                <div className="blogs__card__title">
                    <div>
                        <h3>Как правильно освещать дом снаружи?</h3>
                    </div>
                    <div className='blog_icon'><GoArrowUpRight /></div>
                </div>
                <p>01.01.2024</p>
            </div>
        </div>
    // </div>
  )
}

export default memo(Blog)
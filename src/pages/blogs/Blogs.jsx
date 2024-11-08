import React from 'react'
import { NavLink } from 'react-router-dom'
import Blog from '../../components/blog/Blog'
import { memo } from 'react'

const Blogs = () => {
  return (
    <div className="container">
        <div className="breadcrumb">
          <NavLink to={"/"}>Главная</NavLink> &gt; <strong>О компании</strong>
        </div>
        <h1>Блог</h1>
        <Blog/>
        <Blog/>
    </div>
  )
}

export default memo(Blogs)
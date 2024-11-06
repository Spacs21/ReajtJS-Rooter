import React from 'react'
import Header from '../../components/header/Header'
import error from "../../assets/404.png"
import "./NotFound.scss"
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <Header/>
        <div className="container">
            <div className="error">
                <img src={error}/>
                <h1>Похоже, ничего не нашлось :(</h1>
                <NavLink to={"/"}><button>На главную</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default NotFound
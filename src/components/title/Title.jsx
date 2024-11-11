import React from 'react'
import "./Title.scss"

const Title = ( {title, text} ) => {
  return (
    <div className="title__start">
        <h2>{title}</h2>
        <button className="title__start__btn">{text}</button>
    </div>
  )
}

export default Title
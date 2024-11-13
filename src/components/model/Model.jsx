import React, { useEffect } from 'react'
import "./Model.scss"

const Model = ({children, visibleModel}) => {
  return (
    <div className="model">
        <div className="model__overlay" onClick={()=>visibleModel(null)}></div>
        <div className="model__content">
            {children}
        </div>
    </div>
  )
}

export default Model
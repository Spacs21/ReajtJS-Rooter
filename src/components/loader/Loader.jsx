import React from 'react'
import "./Loader.scss"

const Loader = () => {
  return (
    <div className='loader'>
        <div className="loader__overlay"></div>
        <div class="loader"></div>
    </div>
  )
}

export default Loader
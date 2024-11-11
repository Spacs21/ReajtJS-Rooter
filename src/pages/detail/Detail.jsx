import { useState, useEffect } from "react";
import Product from "../../components/product/Product";

const Detail = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
    
  return (
    <div>
        <Product/>
    </div>
  )
}

export default Detail
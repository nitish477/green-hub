import React, { useState } from 'react'
import "./Card.css";


export default function Card({title,price,discription,img,delPrice}) {

  let [quantity,setQuantity]=useState(0);
 
  function increment(){
    setQuantity(quantity=quantity+1)
  }
  function decrement(){
    if(quantity===0)
    {
      return
    }
    else{
      setQuantity(quantity-1);
    }

  }
  return (
    <>
      <div className='product-card'>
        <img  src={img} alt='Product-img' className='product-img' />
        <p className='product-title'><b>{title}</b></p>
        <p className='product-discription'> {discription} </p>
        <p className='product-price'><del style={{color:'grey',fontSize:'18px'}}> ₹ {delPrice}</del> From ₹ {price} </p>

        <button onClick={increment} className='quantity'>+</button> <span>{quantity}</span> <button onClick={decrement} className='quantity'>-</button>
        <button className='addtocart-btn'> Add To Cart </button>
      </div>
    </>
  )
}




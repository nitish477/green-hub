import './About.css'
import Navbar from '../../component/Navbar/Navbar'
import { ProductCard } from '../../component/Cards/Card'
import { useState } from 'react'
export default function About()
{

  const [products,setProducts]= useState([
    {
      name:'Mango',
      emoji:'🥭',
      price:'120',
      bgcolor:'orange'
    },
    {
      name:'Banana',
      emoji:'🍌',
      price:'120',
      bgcolor:'yellow'
    },
    {
      name:'Grapes',
      emoji:'🍇',
      price:'120',
      bgcolor:'#9966ff'
    },
    {
      name:'Watermelon',
      emoji:'🍉',
      price:'120',
      bgcolor:'Green'
    }
  ])

    return(
        <>
        <Navbar/>
           <div className='flex-div'>
              {
                products.map((ProductName)=>{
                  const {name,emoji,price,bgcolor}=ProductName
                  return(<ProductCard name={name} emoji={emoji} price={price} bgcolor={bgcolor} />)
               })
              }
           </div>
        </>
    )
}
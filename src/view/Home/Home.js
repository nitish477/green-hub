import './Home.css'
import Navbar from '../../component/Navbar/Navbar'
import Card from '../../component/Cards/Card'
import { useEffect } from 'react'
export default function Home(){

     const Fruits=[]

    return(
        <>
          <Navbar/> 
          <div>
            <img src='https://www.ugaoo.com/cdn/shop/collections/Category_Banners-12.png?v=1689938306&width=1500'  className='top-img'/>
          </div>
           <p className='Indoor-Plants'>Indoor Plants</p>
           <p className='home-discription'>
           In recent years, the popularity of indoor home plants has skyrocketed, and for good reason. These natural wonders not only add beauty and tranquility to your living space but also provide a range of benefits that contribute to your overall well-being.
           </p>
          <div className='card-holder'>
              <Card img="https://www.ugaoo.com/cdn/shop/products/GroPot.jpg?v=1680418153&width=750"    title={'Peace Lily Plant'} price={'239'} delPrice={'399'} />
              <Card img="https://www.ugaoo.com/cdn/shop/products/GroPot_86c3ca27-89d2-4c0d-9e08-2f50add72276.jpg?v=1694434958&width=750"   title={'Aglaonema Pink Beauty Plant'} price={'899'} delPrice={'594'} />
              <Card img="https://www.ugaoo.com/cdn/shop/products/GroPot_86c3ca27-89d2-4c0d-9e08-2f50add72276.jpg?v=1694434958&width=750"   title={'Aglaonema Pink Beauty Plant'} price={'899'} delPrice={'594'} />
              <Card img="https://www.ugaoo.com/cdn/shop/products/GroPot_86c3ca27-89d2-4c0d-9e08-2f50add72276.jpg?v=1694434958&width=750"   title={'Aglaonema Pink Beauty Plant'} price={'899'} delPrice={'594'} />
              <Card img="https://www.ugaoo.com/cdn/shop/products/GroPot_86c3ca27-89d2-4c0d-9e08-2f50add72276.jpg?v=1694434958&width=750"   title={'Aglaonema Pink Beauty Plant'} price={'899'} delPrice={'594'} />
              <Card img="https://www.ugaoo.com/cdn/shop/products/GroPot_86c3ca27-89d2-4c0d-9e08-2f50add72276.jpg?v=1694434958&width=750"   title={'Aglaonema Pink Beauty Plant'} price={'899'} delPrice={'594'} />
          </div>
        </>
    )

}

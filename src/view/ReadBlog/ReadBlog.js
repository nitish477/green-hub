import { useParams } from 'react-router-dom'
import './ReadBlog.css'
import { useEffect, useState } from 'react'
import BlogData from './../../BlogData/BlogData.json'
import Navbar from '../../component/Navbar/Navbar'

export default function ReadBlog(){
   const {id}=useParams()
   const [post,setPost]=useState({})
   useEffect(()=>{  
    BlogData.forEach((postobj)=>{
     if(postobj.id === id){
         setPost(postobj)
         console.log(post)
     }
 
    })},[id])


    return(
        <>
        <Navbar/>
        <p className='read-post-heading'>Home Garden Basic</p>
       <div className='img-contanier'>
         <img src={post.img} alt="" width={'100%'} height={'600px'}/>
       </div>
       <p className='post-title'> {post.title} </p>
       <p className='postdate'> {post.postdate} </p>
       <p className='moreinfo'><span className='sub-title'>Discription :</span> {post.moreinfo} </p>
       <p className='moreinfo'> {post.discription} </p>
       <p className='moreinfo'> <span className='sub-title'>Steps :</span> {post.steps} </p>
        </>
    )
}
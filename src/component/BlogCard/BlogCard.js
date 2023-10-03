import './Blogcard.css'
import { Link } from 'react-router-dom'

export default function BlogCard({id,img,title,discription,moreinfo,steps,postdate}){
    return(
        <>
          <div className='blog-card'>
            <img src={img} alt="" className='img' />
            <p className='title'>{title}</p>
            <span className='postdate'>{postdate}</span>
            <p className="blog-card__text">{discription}</p>
            <Link to={`/read/${id}`}><span className='read-btn'>Read More</span></Link>
            </div>
      
        </>
    )
}
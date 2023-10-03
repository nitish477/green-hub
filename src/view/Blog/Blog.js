import Navbar from "../../component/Navbar/Navbar"
import './Blog.css'
import BlogCard from "../../component/BlogCard/BlogCard"
import BlogData from './../../BlogData/BlogData.json'
export default function Blog() {
   return (
      <>
         <Navbar />
         <p className="blog-heading">Gardening Basics</p>
         <div className="Blog-Contanier">
            <div className="sub-contanier">
               {

                  BlogData?.map((post,index) => {
                     return (<>
                     <BlogCard
                        id={post.id }
                        key={index}
                        img={post.img}
                        title={post.title}
                        discription={post.discription}
                        postdate={post.postdate}

                     />
                     </>)
                  })

               }
            
               </div>
         
         </div>
      </>
   )
}
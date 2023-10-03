import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './view/Home/Home'
import About from './view/About/About'
import Contact from './view/Contact/Contact'
import Blog from './view/Blog/Blog'
import ReadBlog from './view/ReadBlog/ReadBlog'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path: '/about',
    element:<About/>
  },
  {
    path: '/contact', 
    element:<Contact/> 
  },
  {
    path:'/blog',
    element:<Blog/>
  },
  {
    path:'/read/:id',
    element:<ReadBlog/>
  },
  {
    path:'*',
    element:<div>404 Not Found</div>
  }
])
root.render(
    <RouterProvider router={router} />
);


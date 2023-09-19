import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './view/Home/Home'
import About from './view/About/About'
import Contact from './view/Contact/Contact'

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
  }
])
root.render(
    <RouterProvider router={router} />
);


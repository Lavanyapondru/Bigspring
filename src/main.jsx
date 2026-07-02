import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Pricing from './pages/Pricing.jsx';
import Contactus from './pages/Contactus.jsx';
import Faq from './pages/Faq.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"blog",
    element: <Blog/>,
  },
  {
    path:"pricing",
    element:<Pricing/>,
  },
  {
    path:"contact",
    element:<Contactus/>,
  },
  {
    path:"faq",
    element:<Faq/>,
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)

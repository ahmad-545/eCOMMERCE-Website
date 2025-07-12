import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './Component/Product/Product.jsx'
import Home from './Component/Home/Home.jsx'
import Man from './Component/Man/Man.jsx';
import Woman from './Component/woman/Woman.jsx';
import Cart from './Component/Cart/Cart.jsx';
import { CartProvider } from './Context/CartContext'; // ✅ Add this line
import Login from './Component/Login/Login.jsx';
import Contact from './Component/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Product",
    element: <Product />,
  },
  {
    path: "/Product/man",
    element: <Man />,
  },
  {
    path: "/Product/woman",
    element: <Woman />,
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/Contact",
    element:<Contact/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* ✅ Wrap RouterProvider */}
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)

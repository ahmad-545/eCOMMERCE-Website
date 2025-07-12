import React, { useEffect, useState } from 'react'
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogInIcon } from 'lucide-react';
import { faAdd, faShop, faShoppingBag, faSign, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../Context/CartContext';
import logo from '../Navbar/Navbardata/logo.png';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';

export default function Navbar() {
    const { cartItems } = useCart(); // inside Navbar component

    let [msatatus, setMsatatus] = useState(false);
    const [sticky, setSticky] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



  return (
    <>
    <div className='Header-m'>

<header className={sticky ? "sticky" : ""}>
            <a href="/" className='logo'>Fitted</a>
            
            <ul className={`navbar ${msatatus ? 'activeMenu':""}`}>
                <li><Link to={'/'}><a href='#'>Home</a></Link></li>
                <li><Link to={'/Product'}><a href='#'>Product</a></Link></li>
               
               
                <li><Link to={"/Contact"}><a href='#'>Contact Us</a></Link></li>
                <li><a href='#'>Blog</a></li>
               
            </ul>
            
            <div className='navbar-btn'>
               <Link to={"/Login"}><FontAwesomeIcon icon={faUserPlus}/></Link>            
               
<Link to="/cart" className="cart-icon-wrapper position-relative">
  <FontAwesomeIcon className='Font' icon={faShoppingBag} />
  {cartItems.length > 0 && (
    <span className="cart-count-badge position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {cartItems.length}
    </span>
  )}
</Link>



<a
    href="https://wa.me/923484236919?text=Hi%20I%20want%20to%20know%20more%20about%20your%20products"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-icon"
    style={{ marginLeft: '15px', color: '#25D366', fontSize: '30px' }}
  >
    <FontAwesomeIcon icon={faWhatsapp}/>
  </a>





                <div className='menu' onClick={()=>setMsatatus(!msatatus)}>
                {msatatus?
                <span>&#10005;</span>
                :
                <span>&#9776;</span>
                }
                </div>
                                
            </div>
            
        </header>
    </div>
    </>
  )
}

import React from 'react'
import "../Product/Product.css"
import Navbar from '../Navbar/Navbar'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import man from "../Product/Pdata/man.png"
import woman from "../Product/Pdata/woman.png"
import Man from '../Man/Man'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'





// Custom arrow components


export default function Product() {

 


  return (
    <>
    <Navbar/>
    
  
    <div className='product'>
    <h1>product</h1>
    
    </div>

    
   
<div className='product-1'>
  <div className='product-text'>
  <h1>Shop by Category</h1>
  
  </div>
  <div className='product-card'>
    <div className='card'>
      <img src={man}/>
      <div className='bnt'>
      
      <Link to='/Product/man' className='btn bnt1'>Man Collection</Link>
      </div>
    
  
    </div>
    <div className='card'>
      <img src={woman}/>
      <div className='bnt'>
      <Link to='/Product/woman' className='btn bnt1'>Woman Collection</Link>
      </div>
    
  
    </div>
    <div className='card'>
      <img src={man}/>
      <div className='bnt'>
        <button className='btn1'>Footwaer</button>
      </div>
    
  
    </div>
    <div className='card'>
      <img src={man}/>
      <div className='bnt'>
        <button className='btn1'>Accesseries</button>
      </div>
    
  
    </div>
   
    
  </div>

</div>




        
      

    

<Footer/>

  </>
  )
}

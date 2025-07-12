import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import {products} from "../Man/manp/mandata.js"
import { useCart } from '../../Context/CartContext';
import "../Man/Man.css"
import Footer from '../Footer/Footer.jsx';
const Man = () => {
  return (
    <>
    <Navbar/>
    

    <div className='container'>
        <div className='man-text text-center'>
        <h1>Man Collection</h1>
        </div>

        <div className='row g-3'>
        {products.map((item, index) => {
          return(
            <Product Pitem={item} key={index}/>
          )
        })}

        </div>
    </div>

    </>
  )
}

export default Man

function Product({ Pitem }) {
  const { addToCart } = useCart();

  return (
    <div className='col-lg-3 col-md-6 col-sm-12'>
      <Card className='card'>
        <Card.Img variant="top" src={Pitem.image} />
        <Card.Body>
          <Card.Title>{Pitem.name}</Card.Title>
          <Card.Text >
            Price: {Pitem.price}
          </Card.Text>
          <Button className='Addcart-btn' onClick={() => addToCart(Pitem)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

      
      
  
    




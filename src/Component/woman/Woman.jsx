import React from 'react'
import {products} from "../woman/womandata.js"
import { Button, Card } from 'react-bootstrap'
import Navbar from '../Navbar/Navbar.jsx'
import { useCart } from '../../Context/CartContext';

export default function Woman() {
  return (
    <>
    <Navbar/>

    <div className='container '>
            <div className='man-text text-center'>
            <h1>Woman Collection</h1>
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


function Product({ Pitem }) {
  const { addToCart } = useCart();

  return (
    <div className='col-lg-3 col-md-6 col-sm-12'>
      <Card className='card'>
        <Card.Img variant="top" src={Pitem.image} />
        <Card.Body>
          <Card.Title>{Pitem.name}</Card.Title>
          <Card.Text>
            Price: {Pitem.price}
          </Card.Text>
          <Button  className='Addcart-btn' onClick={() => addToCart(Pitem)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

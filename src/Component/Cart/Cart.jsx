import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../../Context/CartContext';
import './Cart.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice } = useCart();

  return (
    <>
    <Navbar/>
      <div className="container mt-5">
        <h2 className="text-center mt-4 fs-1 fw-bold">Your Cart</h2>
        <div className="row">
          {cartItems.length === 0 ? (
            <p className="text-center fs-4">Cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <Card className="card">
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Price: {item.price}</Card.Text>

                    <div className="quantity-control">
                      <Button variant="secondary" onClick={() => decreaseQuantity(item.id)}>-</Button>
                      <span className="mx-2">{item.quantity}</span>
                      <Button variant="secondary" onClick={() => increaseQuantity(item.id)}>+</Button>
                    </div>

                    <Button variant="danger" className="mt-2" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="text-center mt-4">
            <h4>Total Price: RS {totalPrice}</h4>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default Cart;

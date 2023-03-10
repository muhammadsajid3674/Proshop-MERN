import React, { useEffect } from 'react'
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import MessageAlert from '../components/MessageAlert';
import { addToCart } from '../config/Redux/Action/cartAction';

const CartScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();

  const { cartItems } = useSelector(state => state.cart)

  const qty = window.location.search ? window.location.search.split('=')[1] : 1;

  console.log();

  const removeItemHandler = (productId) => { }

  useEffect(() => {
    dispatch(addToCart(params.id, qty))
  }, [dispatch, params.id, qty])
  return (
    <Row className='justify-content-between'>
      <Col md={6}>
        <h1>Shopping Cart</h1>
        {!cartItems || cartItems.length === 0 ? (
          <MessageAlert variant='danger' message='Data not found' />
        ) : (
          cartItems.length > 0 && cartItems.map((item, index) => {
            let cartItemImage;
            if (item.image) {
              cartItemImage = require(`../${item.image}`)
            }
            return <ListGroup key={index} style={{ backgroundColor: "#fff", marginBottom: '0.5rem' }}>
              <Row className='align-items-center'>
                <Col md={2}>
                  <Image src={cartItemImage} alt={item.name} fluid />
                </Col>
                <Col md={4}>{item.name}</Col>
                <Col md={2}>$ {item.price}</Col>
                <Col md={2}>
                  <Form.Select value={item.qty} onChange={(e) => dispatch(addToCart(item.productId, e.target.value))}>
                    {[...Array(item.countInStock).keys()].map(e =>
                      <option key={e + 1} value={e + 1}>{e + 1}</option>
                    )}
                  </Form.Select>
                </Col>
                <Col md={2}>
                  <Button type='button' variant='light' onClick={() => removeItemHandler(item.productId)}>
                    <i className='fas fa-trash'></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup>
          })
        )}
      </Col>
      <Col md={4}>
        <ListGroup>
          <ListGroup.Item>
            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
            $ {cartItems.reduce((acc, item) => acc + item.price, 0)}
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col className='text-center'>
                <Button type='submit'>Proceed to checkout</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  )
}

export default CartScreen
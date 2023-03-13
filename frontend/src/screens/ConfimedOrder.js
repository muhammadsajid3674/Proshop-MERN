import React from 'react'
import { Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import MessageAlert from '../components/MessageAlert';

const ConfimedOrder = () => {
    const { state: { cartItems } } = useLocation();
    return (
        <Row className='justify-content-center'>
            <Col md={6}>
                <h1>Order Confirmed</h1>
                {!cartItems || cartItems.length === 0 ? (
                    <MessageAlert variant='danger' message='Data not found' />
                ) : (
                    <ListGroup style={{ backgroundColor: "#fff", marginBottom: '0.5rem' }}>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            {cartItems.length > 0 && cartItems.map((item, index) => {
                                return <Row key={index} className='align-items-center'>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid />
                                    </Col>
                                    <Col md={4}>{item.name}</Col>
                                    <Col md={2}>$ {item.price}</Col>
                                </Row>
                            })}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row className='justify-content-end'>
                                <Col md={6}>
                                    $ {cartItems.reduce((acc, item) => Math.round((acc + item.price) * item.qty), 0)} (Total Price)
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                )}
            </Col>
            {/* <Col md={4}>
                <ListGroup>
                    <ListGroup.Item>
                        <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                        $ {cartItems.reduce((acc, item) => Math.round((acc + item.price) * item.qty), 0)}
                    </ListGroup.Item>
                </ListGroup>
            </Col> */}
        </Row >
    )
}

export default ConfimedOrder
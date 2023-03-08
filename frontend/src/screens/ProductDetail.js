import React from 'react'
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import sampleProducts from '../products'

const ProductDetail = () => {
    const params = useParams()
    const navigate = useNavigate()
    const product = sampleProducts.find(elem => elem._id === params.id)
    const productImage = require(`../${product.image}`)

    return (
        <>
            <Button className='my-3' variant='light' type='button' onClick={() => { navigate('/') }}>Go Back</Button>
            <Row>
                <Col md={6}>
                    <Image src={productImage} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating rating={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                        <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>$ {product.price}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>Status:</Col>
                                <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of stock'}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col className='text-center'>
                                    <Button type='submit' disabled={product.countInStock === 0}>Add To Card</Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default ProductDetail
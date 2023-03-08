import React from 'react'
import products from '../products'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'

const Home = () => {
    return (
        <>
            <h1 className='mt-3'>Latest Product</h1>
            <Row>
                {products.length > 0 && products.map(e =>
                    <Col xl={3} lg={4} md={6} sm={12} key={e._id}>
                        <Product products={e} />
                    </Col>
                )}
            </Row>
        </>
    )
}

export default Home
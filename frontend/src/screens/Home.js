import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const Home = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        async function fetchData() {
            const { data } = await axios.get('http://localhost:5000/api/product')

            setProducts(data)
        };
        fetchData()
    }, [])
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
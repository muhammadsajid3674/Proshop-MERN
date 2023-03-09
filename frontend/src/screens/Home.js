import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductList } from '../config/Redux/Action/productListAction'

const Home = () => {
    const dispatch = useDispatch();
    const { loading, products } = useSelector(state => state.productList)
    useEffect(() => {
        dispatch(fetchProductList())
    }, [dispatch])
    return (
        <>
            <h1 className='mt-3'>Latest Product</h1>
            {loading ? (

                <Row>
                    <Col className='text-center'>
                        <h1>Loading...</h1>
                    </Col>
                </Row>
            ) : (
                <Row>
                    {products.length > 0 && products.map(e =>
                        <Col xl={3} lg={4} md={6} sm={12} key={e._id}>
                            <Product products={e} />
                        </Col>
                    )}
                </Row>
            )}
        </>
    )
}

export default Home
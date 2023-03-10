import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeScreen from '../screens/HomeScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Routes>
                        <Route path='/' element={<HomeScreen />} />
                        <Route path='/product/:id' element={<ProductDetailScreen />} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    )
}

export default AppRouter
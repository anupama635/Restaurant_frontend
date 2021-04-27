import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import axiosInstance from '../axios';
import ProCard from './Procard';

const Products = () => {
    const history = useHistory();

    useEffect(() => {
        getProduct()
    }, []);

    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const getProduct = async () => {
        try {
            const res = await axiosInstance.get('/staff/menu/allproducts/')
            console.log(res.data)
            setProduct(res.data)
            setLoading(true)
        } catch (err) {
            alert(err.message);

        }
    }


    return (
        <div style={{ marginLeft: '20%' }}>

            {loading &&
                products.map((product) => (
                    <Container>
                        <Row>

                            <Col>
                                <ProCard product={product} key={product.id} />
                            </Col>

                        </Row>
                    </Container>

                ))
            }

        </div>
    )
}

export default Products;

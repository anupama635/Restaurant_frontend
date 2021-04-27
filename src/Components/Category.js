import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import axiosInstance from '../axios';
import Cards from './Categorycard';

const Category = () => {
    const history = useHistory();

    useEffect(() => {
        getCategory()
    }, []);

    const [categories, setCategory] = useState([])
    const [loading, setLoading] = useState(false)

    const getCategory = async () => {
        try {
            const res = await axiosInstance.get('/staff/menu/category/')
            console.log(res.data)
            setCategory(res.data)
            setLoading(true)
        } catch (err) {
            alert(err.message);

        }
    }

    const initialFormData = Object.freeze({

        category: '',


    })
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        console.log([e.target.name], e.target.value)
        updateFormData({
            ...formData,

            //trimimg any whitespace

            [e.target.name]: e.target.value.trim()
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        axiosInstance.post('/staff/menu/category/', {
            category: formData.category
        }).then((res) => {
            console.log(res)
            getCategory()
        })
    }



    return (
        <div style={{ marginLeft: '20%' }}>


            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" name="category" placeholder="Enter Category to add" onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                    Add
                </Button>

            </Form>
            {loading &&
                categories.map((category) => (
                    <Container>
                        <Row>

                            <Col>
                                <Cards props={category} key={category.id} />
                            </Col>

                        </Row>
                    </Container>

                ))
            }

        </div>
    )
}

export default Category

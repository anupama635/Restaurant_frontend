import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import axiosInstance from '../axios';
import Cards from './Categorycard';
import SubCards from './SubCard';

const SubCategory = () => {
    const history = useHistory();
    const id = useParams();
    console.log(id.id)
    

    useEffect(() => {
        getSubCategory()
    }, []);

    const [subcategories, setSubCategory] = useState([])
    const [loading, setLoading] = useState(false)

    const getSubCategory = async () => {
        try {
            const res = await axiosInstance.get('/staff/menu/category/'+id.id+'/subcategory/')
            console.log(res.data)
            setSubCategory(res.data)
            setLoading(true)
        } catch (err) {
            alert(err.message);

        }
    }

    const initialFormData = Object.freeze({
        category: id.id,
        sub_category: '',
    })
    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        e.preventDefault()
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        axiosInstance.post('/staff/menu/category/'+id.id+'/subcategory/', {
            sub_category: formData.sub_category,
            category:id.id
        }).then((res) => {
            console.log(res)
            getSubCategory()
        })
    }



    return (
        <div style={{ marginLeft: '20%' }}>


            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Sub Category:</Form.Label>
                    <Form.Control type="text" name="sub_category" placeholder="Enter Sub Category to add" onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                    Add
                </Button>

            </Form>
            {loading &&
                subcategories.map((subcategory) => (
                    <Container>
                        <Row>

                            <Col>
                                <SubCards props={subcategory} key={subcategory.id} />
                            </Col>

                        </Row>
                    </Container>

                ))
            }

        </div>
    )
}

export default SubCategory;

import React from 'react'
import { Card,Image,Button } from 'react-bootstrap';
import axiosInstance from '../axios';

const ProCard = ({product}) => {
    console.log(product)
    const delete_=(e)=>{
        axiosInstance.delete('/staff/menu/category/'+product.category+'/subcategory/'+product.sub_category+'/item/'+product.id+'/')
    }

    const update=(e)=>{
        console.log('Update')
    }
    return (
        <div>
        <Card className='my-3 p-3 rounded h-60'>
                <div style={{ display: 'flex' }}>
                    <Image style={{ width: '10%', height: '10%' }} src={`http://127.0.0.1:8000${product.image}`} thumbnail />
                    <Card.Body >
                        <Card.Title>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                {product.itemname}
                            </div>
                        </Card.Title>
                        <Card.Text>
                        <div style={{ display: "flex", marginBottom: '2%' }}>
                                <h5 className="card-text" style={{ marginLeft: '10px' }}>Category:</h5> <h6 className="mt-1 ml-1" >{product.category_name}</h6>
                            </div>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                <h5 className="card-text" style={{ marginLeft: '10px' }}>Sub Category:</h5> <h6 className="mt-1 ml-1" >{product.subcategory_name}</h6>
                            </div>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                <h5 className="card-text" style={{ marginLeft: '10px' }}>Price:</h5> <h6 className="mt-1 ml-1" >Rs.{product.price}</h6>
                            </div>
                            <div style={{ display: "flex", marginBottom: '2%' }}>
                                <h5 className="card-text" style={{ marginLeft: '10px' }}>Description:</h5><h6 className="mt-1 ml-1" ><i>{product.description}</i></h6> 
                            </div>
                        </Card.Text>
                        <div style={{ display: "flex", marginBottom: '2%' }}>
                        <Button onClick={update} className="mr-1">Update</Button>
                        <Button onClick={delete_} classname="ml-1">Delete</Button>
                            </div>
                    
                    </Card.Body>
                    </div>
            </Card>
            
        </div>
    )
}

export default ProCard;

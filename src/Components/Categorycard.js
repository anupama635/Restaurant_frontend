import { Card, Accordion, Button } from 'react-bootstrap'
import React from 'react'
import { useHistory } from 'react-router'
import axiosInstance from '../axios';





const Cards = ({ props }) => {
  const history = useHistory();

  const showsubcategory=(e)=>{
      history.push('/menu/category/' + props.id + '/subcategory');
  }
  const delete_=(e)=>{
    axiosInstance.delete('/staff/menu/category/'+props.id+'/update/').then((res)=>{
      alert(res.data)
      window.location.reload()
    })
}
  return (

    <Card className='my-3 p-3 rounded h-90'>
      

        <Card.Body>
            <Card.Title>
            {props.category}
            </Card.Title>
            <Button onClick={showsubcategory}>Show Subcategory</Button>
            <Button onClick={delete_} className="ml-2" variant='danger'>Delete</Button>
        </Card.Body>
    </Card>
  )
}

export default Cards


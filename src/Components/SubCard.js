import { Card, Accordion, Button } from 'react-bootstrap'
import React from 'react'





const SubCards = ({ props }) => {
    const  showsubcategory = (e) =>{
        e.preventDefault()

    }

    const  delete_=(e)=>{
        e.preventDefault()

    }

  return (

    <Card className='my-3 p-3 rounded h-90'>
      

        <Card.Body>
            <Card.Title>
            {props.sub_category}
            </Card.Title>

            <Button onClick={showsubcategory}>Show Subcategory</Button>
            <Button onClick={delete_} className="ml-2" variant='danger'>Delete</Button>

        </Card.Body>
    </Card>
  )
}

export default SubCards;


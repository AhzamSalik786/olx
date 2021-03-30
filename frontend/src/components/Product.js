import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Footer from './Footer'
import Rating from './Rating'
const Product = ({ product }) => {
    console.log("product daaaaaaata", product)
  return (
    <div>

    
    <Card className='my-3 p-3 rounded'>
      <Link to={`/products/${product._id}`}>
        <Card.Img src={product.images.image0} variant='top' height='200' width ="auto"/>
      </Link>
      <Card.Body>
        <Link to={`/products/${product._id}`}>
          <Card.Title as='div'>
            <strong>
              <b>RS: {product.price}</b>
            </strong>
            <br />
            <strong>
              {product.runingKilometers} KM
            </strong>
          </Card.Title>
         
        </Link>
        
        <Card.Text as='div' className ="font-weight-bolder"><strong><b>${product.info}</b></strong> </Card.Text>
        <Card.Text as='div' className ="font-weight-bolder"><strong><b>Date: {product.date}</b></strong> </Card.Text>
        {/* <Card.Text as='div'>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        </Card.Text> */}
    
      </Card.Body>
    </Card>
    </div>
  )
}

export default Product

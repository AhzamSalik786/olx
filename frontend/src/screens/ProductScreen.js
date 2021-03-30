import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { ListProductDetails } from '../actions/productsAction'
import MapScreen from '../components/MapScreen'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Container,
  Form,
} from 'react-bootstrap'

import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'
// import { productDetailsReducer } from '../reducers/productsReducers'

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, Product } = productDetails
  console.log('get data', productDetails)
  console.log('get dataaaaaaaaaa', Product?.images?.image0)
  useEffect(() => {
    dispatch(ListProductDetails(match.params.id))
  }, [dispatch, match])
  // const addToCardHandler = () => {
  //   history.push(`/Bag/${match.params.id}?qty=${qty}`)
  // }

  // const product = products.find((p) => p._id === match.params.id);
  // console.log("book.countInStock",book.countInStock)

  return (
    // <h1>Hello</h1>
    <>
      <h1>Hello!</h1>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Container>
          <Row>
            
            <Col md={8} sm={12}>
              <Row>
                <Col>
                <div className='slide-container'>
                <Slide>
                  <div className='each-slide'>
                    <div
                      style={{
                        height: 'auto',
                        background: 'no-repeat',
                        backgroundImage: `url(${Product?.images?.image0})`,
                      }}
                    >
                      <span>Slide 1</span>
                    </div>
                  </div>
                  <div className='each-slide'>
                    <div
                      style={{
                        height: 'auto',
                        background: 'no-repeat',

                        backgroundImage: `url(${Product?.images?.image1})`,
                      }}
                    >
                      <span>Slide 2</span>
                    </div>
                  </div>
                  <div className='each-slide'>
                    <div
                      style={{
                        height: 'auto',
                        background: 'no-repeat',

                        backgroundImage: `url(${Product?.images?.image2})`,
                      }}
                    >
                      <span>Slide 3</span>
                    </div>
                  </div>
                  <div className='each-slide'>
                    <div
                      style={{
                        height: 'auto',
                        background: 'no-repeat',

                        backgroundImage: `url(${Product?.images?.image3})`,
                      }}
                    >
                      <span>Slide 4</span>
                    </div>
                  </div>
                  <div className='each-slide'>
                    <div
                      style={{
                        height: 'auto',
                        background: 'no-repeat',

                        backgroundImage: `url(${Product?.images?.image4})`,
                      }}
                    >
                      <span>Slide 5</span>
                    </div>
                  </div>
                  <div className='each-slide'>
                    <div
                      style={{
                        height: 'auto',
                        background: 'no-repeat',

                        backgroundImage: `url(${Product?.images?.image5})`,
                      }}
                    >
                      <span>Slide 6</span>
                    </div>
                  </div>
                </Slide>
              </div>
                </Col>
              </Row>
              <Row>
                <Col>
                    <h2>
                      Description:
                    </h2>
                    <h6>
                      {Product?.description}
                    </h6>
                </Col>
              </Row>
              
            </Col>
            <br />
            <Col md={4} sm={12}>
              <Row>
                <Col>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                 <b>RS:  </b><span>{Product.price}</span>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <b>Info:  </b><span>{Product?.info}</span>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                <b>Address: </b><span>{Product?.address}</span>
                  
                </ListGroup.Item>
              </ListGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                <h3> Seller Description</h3>
                  
                </ListGroup.Item>
              </ListGroup>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <div>

                <b>Name:  </b><span>{Product?.name}</span> 
                <br />
                <b>Phone No:  </b><span>{Product?.user?.phoneNo}</span>
                  

                  </div>
                </ListGroup.Item>
              </ListGroup>
                
                </Col>
              </Row>
              <Row>
                
                <MapScreen />
                
              </Row>
            </Col>
            
          </Row>
        </Container>
        // <Container>
        //   <Row>
        //     <Col md={4}>
        //       <Image src={book.image} alt={book.bookName} fluid />
        //     </Col>
        //     <Col md={3}>
        //       <ListGroup variant='flush'>
        //         <ListGroup.Item>
        //           <h3>{book.bookName}</h3>
        //         </ListGroup.Item>
        //         <ListGroup.Item>
        //           <Rating
        //             value={book.rating}
        //             text={`${book.numReviews} reviews`}
        //           />
        //         </ListGroup.Item>
        //         <ListGroup.Item>Writter: {book.writter}</ListGroup.Item>

        //         <ListGroup.Item>Page: {book.pages} Pages</ListGroup.Item>

        //         <ListGroup.Item>Price: ${book.price}/Per.Day</ListGroup.Item>
        //         <ListGroup.Item>
        //           Description: {book.description}
        //         </ListGroup.Item>
        //       </ListGroup>
        //     </Col>
        //     <Col md={4}>
        //       <Card>
        //       {book.countInStock > 0 && (
        //             <ListGroup.Item>
        //               <Row>
        //                 <Col>Days:</Col>
        //                 <Col>
        //                   <Form.Control
        //                     as='select'
        //                     // placeholder="name"
        //                     value={qty}
        //                     onChange={(e) => setQty(e.target.value)}
        //                   >

        //                     {[...Array(10).keys()].map((x) => (
        //                         <option key={x + 1} value={x + 1}>
        //                           {x + 1}  Day!
        //                         </option>
        //                       ))}
        //                   </Form.Control>
        //                 </Col>
        //               </Row>
        //             </ListGroup.Item>
        //           )}
        //         <ListGroup variant='flush'>
        //           <ListGroup.Item>
        //             <Row>
        //               <Col>Price:</Col>
        //               <Col>
        //                 <strong>${book.price * qty}/For {qty} Day!</strong>
        //               </Col>
        //             </Row>
        //           </ListGroup.Item>
        //           <ListGroup.Item>
        //             <Row>
        //               <Col>Status:</Col>
        //               <Col>
        //                 {!!book.countInStock
        //                   ? 'Avalible'
        //                   : 'Not Avaliable'}
        //               </Col>
        //             </Row>
        //           </ListGroup.Item>

        //           <ListGroup.Item>
        //             <Button
        //               onClick={addToCardHandler}
        //               className='btn-block'
        //               type='button'
        //               disabled={book.countInStock === false}
        //             >
        //               Add To Borrowing Bag! <span> </span> <span> </span>
        //         <i className="fas fa-suitcase-rolling">  </i>
        //             </Button>
        //           </ListGroup.Item>
        //         </ListGroup>
        //       </Card>
        //     </Col>
        //   </Row>
        //   {/* <Row className='py-5'>
        //     <Col md={3}>
        //       <ListGroup variant='flush'>
        //         <ListGroup.Item>
        //           <h3>{book.bookName}</h3>
        //         </ListGroup.Item>
        //       </ListGroup>
        //     </Col>
        //   </Row> */}
        // </Container>
      )}
    </>
  )
}

export default ProductScreen

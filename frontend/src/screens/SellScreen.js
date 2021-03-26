import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form, Button, ListGroup } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { sellListProduct, saveLocation } from '../actions/sellAction'
import MapScreen from '../components/MapScreen'
import axios from 'axios'
// import { sellProductListReducer } from '../reducers/sellReducers'
const SellScreen = ({ history }) => {
  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [info, setInfo] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [runingKilometers, setRuningKilometers] = useState('')
  const [date, setDate] = useState('')
  const [addressLocation, setAddressLocation] = useState('')
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const [images, setImages] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, userInfo, error } = userLogin
  const sellProductList = useSelector((state) => state.sellProductList)
  console.log('abc', userInfo.userData._id)
  const addSubmitHandler = (e) => {
    setUser(userInfo.userData._id)
    e.preventDefault()
    const currentLocation = {
      latitude,
      longitude,
    }
    dispatch(
      sellListProduct(
        user,
        name,
        type,
        info,
        description,
        price,
        runingKilometers,
        date,
        addressLocation,
        currentLocation,
        images
      )
    )
    // history.push('/user/login?redirect=products')
  }
  // var a = <i class="fas fa-car"></i>
  var TypeArray = ['Mobile', 'Car', 'Property', 'Bike', 'Animals', 'Furniture']
  // var Address= [ ];
  var City = [
    'Karachi',
    'Lahore',
    'Islamabad',
    'Faisalabad',
    'Peshawar',
    'Multan',
  ]
  var Country = ['Pakistan', 'China', 'India', 'Indonesia', 'Japan', 'Turkey']
  // var Array1 = [
  //   {
  //     'type' : 'Mobile',
  //     'icon' : <i class="fas fa-car"></i>
  //   },

  // ]
  // const submitHandlerWithMap= async (e) => {
  //   e.preventDefault()
  //   console.log('submit')
  //   await navigator.geolocation.getCurrentPosition(
  //     function (position) {
  //       console.log('pos', position)
  //       // var position = position
  //       var latitude = position.coords.latitude
  //       var longitude = position.coords.longitude
  //       setLatitude(position.coords.latitude)
  //       setLongitude(position.coords.longitude)
  //       console.log('Latitude is :', position.coords.latitude)
  //       console.log('Longitude is :', position.coords.longitude)
  //       console.log(position)
  //       dispatch(saveLocation({ latitude, longitude }))

  //     },

  //     // setTimeout(()=>(history.push('/user/payment')), 3000)
  //     // myFunction(){
  //       //   setTimeout(function(){ alert("Hello"); }, 3000);
  //       // }

  //       // function (error) {
  //         //   console.error('Error Code = ' + error.code + ' - ' + error.message)
  //         // }
  //         )
  //         // setTimeout(() => {
  //         //   history.push('/user/payment')
  //         // }, 3000)
  //         // e.preventDefault()
  //   // console.log( "fffffffff",abc)
  //   // history.push('/payment')
  // }
  const [image0, setImage0] = useState('')
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [image5, setImage5] = useState('')
  const [imageSelected0, setImageSelected0] = useState('')
  const [imageSelected1, setImageSelected1] = useState('')
  const [imageSelected2, setImageSelected2] = useState('')
  const [imageSelected3, setImageSelected3] = useState('')
  const [imageSelected4, setImageSelected4] = useState('')
  const [imageSelected5, setImageSelected5] = useState('')

  console.log('image0', image0)
  console.log('image1', image1)
  console.log('image2', image2)
  console.log('image3', image3)
  console.log('image4', image4)
  console.log('image5', image5)
  const uploadImage0 = async () => {
    try {
      const formData = new FormData()
      formData.append('upload_preset', 'zlwhf30d')
      formData.append('file', imageSelected0)
      // formData.append('file', imageSelected1)
      formData.append('cloud_name', 'olx-nestjs')

      const res = await axios
        .post(
          'https://api.cloudinary.com/v1_1/olx-nestjs/image/upload',
          formData
        )
        .then((res) => {
          setImage0(res.data.secure_url)
          console.log('back response0', res.data.secure_url)
        })
      console.log(imageSelected0)
      // console.log(imageSelected1)
      uploadImage1()
    } catch (error) {
      console.log('error=====', error)
    }
  }
  const uploadImage1 = async () => {
    try {
      const formData = new FormData()
      formData.append('upload_preset', 'zlwhf30d')
      formData.append('file', imageSelected1)
      // formData.append('file', imageSelected1)
      formData.append('cloud_name', 'olx-nestjs')

      console.log('check ===>', formData)
      const res = await axios
        .post(
          'https://api.cloudinary.com/v1_1/olx-nestjs/image/upload',
          formData
        )
        .then((res) => {
          setImage1(res.data.secure_url)
          console.log('back response1', res.data.secure_url)
        })
      console.log(imageSelected1)
      // console.log(imageSelected1)
      uploadImage2()
    } catch (error) {
      console.log('error=====', error)
    }
  }

  const uploadImage2 = async () => {
    try {
      const formData = new FormData()
      formData.append('upload_preset', 'zlwhf30d')
      formData.append('file', imageSelected2)
      // formData.append('file', imageSelected1)
      formData.append('cloud_name', 'olx-nestjs')

      console.log('check ===>', formData)
      const res = await axios
        .post(
          'https://api.cloudinary.com/v1_1/olx-nestjs/image/upload',
          formData
        )
        .then((res) => {
          setImage2(res.data.secure_url)
          console.log('back response2', res.data.secure_url)
        })
      console.log(imageSelected2)
      // console.log(imageSelected1)
      uploadImage3()
    } catch (error) {
      console.log('error=====', error)
    }
  }

  const uploadImage3 = async () => {
    try {
      const formData = new FormData()
      formData.append('upload_preset', 'zlwhf30d')
      formData.append('file', imageSelected3)
      // formData.append('file', imageSelected1)
      formData.append('cloud_name', 'olx-nestjs')

      console.log('check ===>', formData)
      const res = await axios
        .post(
          'https://api.cloudinary.com/v1_1/olx-nestjs/image/upload',
          formData
        )
        .then((res) => {
          setImage3(res.data.secure_url)
          console.log('back response3', res.data.secure_url)
        })
      console.log(imageSelected3)
      // console.log(imageSelected1)
      uploadImage4()
    } catch (error) {
      console.log('error=====', error)
    }
  }
  const uploadImage4 = async () => {
    try {
      const formData = new FormData()
      formData.append('upload_preset', 'zlwhf30d')
      formData.append('file', imageSelected4)
      // formData.append('file', imageSelected1)
      formData.append('cloud_name', 'olx-nestjs')

      console.log('check ===>', formData)
      const res = await axios
        .post(
          'https://api.cloudinary.com/v1_1/olx-nestjs/image/upload',
          formData
        )
        .then((res) => {
          setImage4(res.data.secure_url)
          console.log('back response4', res.data.secure_url)
        })
      console.log(imageSelected4)
      // console.log(imageSelected1)
      uploadImage5()
    } catch (error) {
      console.log('error=====', error)
    }
  }

  const uploadImage5 = async () => {
    try {
      const formData = new FormData()
      formData.append('upload_preset', 'zlwhf30d')
      formData.append('file', imageSelected5)
      // formData.append('file', imageSelected1)
      formData.append('cloud_name', 'olx-nestjs')

      console.log('check ===>', formData)
      const res = await axios
        .post(
          'https://api.cloudinary.com/v1_1/olx-nestjs/image/upload',
          formData
        )
        .then((res) => {
          setImage5(res.data.secure_url)
          console.log('back response5', res.data.secure_url)
        })
      console.log(imageSelected5)
      // console.log(imageSelected1)
      //  uploadImage4()
    } catch (error) {
      console.log('error=====', error)
    }
  }

  return (
    <Row>
      <Col xs={12} md={8}>
        <FormContainer>
          <h1>POST YOUR ADD</h1>
          {message && <Message variant='danger'> {message}</Message>}

          {error && <Message variant='danger'> {error}</Message>}
          {loading && <Loader />}
          <Form onSubmit={addSubmitHandler}>
            <Form.Group controlId='images'>
              {/* <Form.Label>Images</Form.Label> */}
              {/* <Form.Control
              type='image'
              placeholder='Enter Your Image'
              value={images}
              onChange={(e) => setImages(e.target.value)}
            > */}
              <input
                type='file'
                onChange={(e) => {
                  console.log('setIMAGE', e.target.files[0])
                  setImageSelected0(e.target.files[0])
                }}
              />
              <input
                type='file'
                onChange={(e) => {
                  setImageSelected1(e.target.files[0])
                }}
              />
              <input
                type='file'
                onChange={(e) => {
                  setImageSelected2(e.target.files[0])
                }}
              />
              <input
                type='file'
                onChange={(e) => {
                  setImageSelected3(e.target.files[0])
                }}
              />
              <input
                type='file'
                onChange={(e) => {
                  setImageSelected4(e.target.files[0])
                }}
              />
              <input
                type='file'
                onChange={(e) => {
                  setImageSelected5(e.target.files[0])
                }}
              />
              <br />
              <Button onClick={uploadImage0}>Upload Images</Button>

              {/* </Form.Control> */}
            </Form.Group>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* <Form.Group controlId='type'>
          <Form.Label>Type/Category</Form.Label>
          <Form.Control
            type='type'
            placeholder='Enter Your Product Type/Category'
            value={type}
            onChange={(e) => setType(e.target.value)}
          ></Form.Control>
        </Form.Group> */}
            <Form.Group>
              {/* <ListGroup.Item> */}
              <Row>
                <Col>Product Type</Col>
                <Col>
                  <Form.Control
                    as='select'
                    // placeholder="name"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    {[...TypeArray].map((x) => {
                      return (
                        <option key={x} value={x}>
                          {x}
                        </option>
                      )
                    })}
                  </Form.Control>
                </Col>
              </Row>
              {/* </ListGroup.Item> */}
            </Form.Group>
            <Form.Group controlId='info'>
              <Form.Label>Info</Form.Label>
              <Form.Control
                type='info'
                placeholder='Enter Your Product Information'
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='description'
                placeholder='Enter Your Product Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='price'
                placeholder='Enter Your Product Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='runingKilometers'>
              <Form.Label>Year</Form.Label>
              <Form.Control
                type='runingKilometers'
                placeholder='year'
                value={runingKilometers}
                onChange={(e) => setRuningKilometers(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='date'>
              <Form.Label>Date:</Form.Label>
              <Form.Control
                type='date'
                placeholder='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='addressLocation'>
              <Form.Label>Address</Form.Label>
              {/* <Row>
            <Col>
              <Form.Control
                type='address'
                placeholder='address'
                value={addressLocation}
                onChange={(e) => setDate(e.target.value)}
              ></Form.Control>
            </Col>
            <Col>
              <Form.Control
                as='select'
                // placeholder="name"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {[...City].map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col>
              <Form.Control
                as='select'
                // placeholder="name"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {[...Country].map((x) => (
                  <option key={x} value={x}>
                    {x}
                  </option>
                ))}
              </Form.Control>
            </Col>
          </Row> */}
              <Form.Control
                type='addressLocation'
                placeholder='Enter Your Address'
                value={addressLocation}
                onChange={(e) => setAddressLocation(e.target.value)}
              ></Form.Control>
            </Form.Group>

            {/* <Form onSubmit={submitHandlerWithMap}>
          <Form.Group controlId='location'>
            <Form.Label>Location</Form.Label>
            
          </Form.Group>
          <Button type='submit' variant='primary'>
            <i class='fas fa-map-marker-alt fa-lg'> Know Your Location</i>
          </Button>
        </Form> */}
            <Button type='submit' variant>
              POST NOW
            </Button>
          </Form>
        </FormContainer>
      </Col>
      <Col xs={12} md={4}>
        <MapScreen />
      </Col>
    </Row>
  )
}
export default SellScreen

// https://www.youtube.com/watch?v=Y-VgaRwWS3o

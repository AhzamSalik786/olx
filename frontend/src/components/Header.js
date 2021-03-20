import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown ,Button} from 'react-bootstrap'
import { logout } from '../actions/userAction'

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  console.log("userLogin", userLogin)
  console.log("userInfo", userInfo)

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
       {/* bg='primary' */}
      <Navbar bg='primary' variant='light' expand='lg' collapseOnSelect 
      style={{
        display: "flex",
        alignItems:"center"

      }}
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand> OLX</Navbar.Brand>
          </LinkContainer>
{/* 
          <LinkContainer to='/'>
            <Navbar.Brand>
              The largest bookbank of new used and budget printed books in
              Pakistan!
            </Navbar.Brand>
          </LinkContainer> */}
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto' 
            style={
              {
                
                display: "flex",
        alignItems:"center"
              }
            }
            >
              
              {userInfo ? (
                <NavDropdown title={userInfo.userData.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile:</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/user/login'>
                  <Nav.Link>
                    <i className='fas fa-user fa-lg'><b>  SignIn</b></i>
                  </Nav.Link>
                </LinkContainer>
              )}
              <LinkContainer to='/bag'>
                <Nav.Link>
                 {/* <b> +SELL </b>
        <img src="\images\sell2.jpg" variant='top' height='15px' width='40px'/> */}
                  <Button
                  style ={ {
                    backgroundColor: "blue",
                    borderRadius: "30px"
                  }}
                  ><i class="fas fa-plus">SELL</i></Button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

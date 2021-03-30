import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom';
import SearchField from "react-search-field";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown ,Button} from 'react-bootstrap'
import { logout } from '../actions/userAction'
import SearchBox from './SearchBox'
import NavigationBar from './NavigationBar';


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
    <div>
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
            <Route render={({history})=> <SearchBox history={history}/> } />
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
              <LinkContainer to='/user/login?redirect=products'>
    {/* history.push('/user/login?redirect=products') */}
                
                <Nav.Link>
                 {/* <b> +SELL </b>
        <img src="\images\sell2.jpg" variant='top' height='15px' width='40px'/> */}
                  <Button
                  style ={ {
                    backgroundColor: "blue",
                    borderRadius: "30px"
                  }}
                  ><i className="fas fa-plus">SELL</i></Button>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  
      <NavigationBar />
    

    </div>
  )
}

export default Header

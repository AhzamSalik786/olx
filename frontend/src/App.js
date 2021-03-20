import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'


const App = () => {
  return (
    <Router>
      <Header />

      <main className='py-3'>
        <Container>
          
          <Route path='/' component={HomeScreen} exact />
          <Route path='/user/Login' component={LoginScreen} exact />
          <Route path='/user/Register' component={RegisterScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App

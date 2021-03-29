import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import SellScreen from './screens/SellScreen'
import ProductScreen from './screens/ProductScreen'
// import SearchBox from './components/SearchBox'

const App = () => {
  return (
    <Router>
      <Header />

      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/search/:keyword' component={HomeScreen} />
          <Route path='/user/Login' component={LoginScreen} />
          <Route path='/user/Register' component={RegisterScreen} />
          <Route path='/user/products' component={SellScreen} />
          <Route path='/products/:id' component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App

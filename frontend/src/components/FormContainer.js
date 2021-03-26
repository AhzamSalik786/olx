import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
// import MapScreen from './MapScreen'

const FormContainer = ({ children }) => {
    return (
        <Container>
        <Row  className= 'justify-content-md-center'>
        <Col xs= {12} md={6}>
            {children}
        </Col>
        <Col xs={12} md={6}>
            {/* <MapScreen /> */}
                    </Col>
        </Row>
            
        </Container>
    )
}

export default FormContainer
import React from 'react'
import {Container , Col, Row, Navbar, Nav ,Button} from 'react-bootstrap'
import '../App'
const Footer = () => {
    return (
        <footer className="footer">
            <Navbar bg='primary' variant='light' expand='lg' collapseOnSelect 
      style={{
        display: "flex",
        alignItems:"center"

      }}
      >
            <Container>
                {/* <Row>
                    <Col sm={12} md={4}>
                    
                    </Col>
                    
                </Row> */}
                <Row style={
                    {
                        width:"100%"
                    }
                }>
           {/* <Col md="3">
            <h5 className="title">Footer Content</h5>
             <p>
               Here you can use rows and columns here to organize your footer
               content.
             </p>
           </Col> */}
           
           <Col sm="12" md="3" lg="3" >
             <h5 className="title">POPULAR CATEGORIES</h5>
             <ul>
               <li className="list-unstyled" color="white">
                 <a href="http://localhost:3000/search/Car" className="white" >Cars</a>
               </li>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/search/mobile" className="white">Mobile Phones</a>
               </li>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/search/animals" className="white">Animals</a>
               </li>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/search/furniture_&amp;_home_decor" className="white">Furniture &amp; Home Decor</a>
               </li>
             </ul>
           </Col>
           <Col sm="12" md="3" lg="3">
             <h5 className="title">TRENDING SEARCHES</h5>
             <ul>
               <li className="list-unstyled" >
                 <a href="http://localhost:3000/search/bikes" className="white">Bikes</a>
               </li>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/search/watches" className="white">Watches</a>
               </li>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/search/books" className="white">Books</a>
               </li>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/search/dogs" className="white">Dogs</a>
               </li>
             </ul>
           </Col>
           <Col sm="12" md="3" lg="3">
             <h5 className="title">ABOUT US</h5>
             <ul>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/about_olx_group" className="white">About OLX Group</a>
               </li>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/olx_blog" className="white">OlX Blog</a>
               </li>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/contect_us" className="white">Contact Us</a>
               </li>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/olx_for_businesses" className="white">OLX for Businesses</a>
               </li>
             </ul>
           </Col>
           <Col sm="12" md="3" lg="3">
             <h5 className="title">OLX</h5>
             <ul>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/help" className="white">Help</a>
               </li>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/site_map" className="white">Site map</a>
               </li>
               <li className="list-unstyled">
                 <a href="http://localhost:3000/legal_&amp;_privacy_information" className="white">Legal &amp; Privacy information</a>
               </li>
              
             </ul>
           </Col>
         </Row>
                
                {/* <Row>
                <Col className='text-center py-3'>
                        Copyright &copy; The OLX
                    </Col>
                </Row> */}
            </Container>
        </Navbar>
        </footer>
    )
}

export default Footer
// import React from "react";
// // import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import{Form, Col,Row,Container,} from 'react-bootstrap'

// const Footer = () => {
//   return (
//     <footer color="primary" className="font-small pt-4 mt-4">
//       <Container fluid className="text-center text-md-left">
//         <Row>
//           <Col md="6">
//             <h5 className="title">Footer Content</h5>
//             <p>
//               Here you can use rows and columns here to organize your footer
//               content.
//             </p>
//           </Col>
//           <Col md="6">
//             <h5 className="title">Links</h5>
//             <ul>
//               <li className="list-unstyled">
//                 <a href="#!">Link 1</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 2</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 3</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 4</a>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//       <div className="footer-copyright text-center py-3">
//         <Container fluid>
//           &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
//         </Container>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
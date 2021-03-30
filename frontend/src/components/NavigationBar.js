import React, { useState } from 'react'
import { Form, Button, Navbar, Nav, FormControl ,InputGroup, DropdownButton, Dropdown} from 'react-bootstrap'
import '../App.css';
const NavigationBar = ({history}) => {

  return (
    <>
    <InputGroup className="mb-3">
      <DropdownButton
        as={InputGroup.Prepend}
        variant="outline-primary"
        title="ALL CATEGORIES"
        id="input-group-dropdown-1"
      >
        
<DropdownButton
        as={InputGroup.Prepend}
        variant="outline-primary"
        title="Vehicles"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item href="http://localhost:3000/search/car">Cars</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/car_on_installments">Cars On Installments</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/car_accessories">Cars Accessories</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/spare_parts">Spare Parts</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/rickshaw_&amp;_chingchi">Rickshaw &amp; Chingchi</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/other_vechicles">Other Vehicles</Dropdown.Item>

</DropdownButton>
<DropdownButton
        as={InputGroup.Prepend}
        variant="outline-primary"
        title="Animals"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item href="#">Fish &amp; Aquariums</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/birds">Birds</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/cats">Cats</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/dogs">Dogs</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/horses">Horses</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/other_animals">Other Animals</Dropdown.Item>
</DropdownButton>
<DropdownButton
        as={InputGroup.Prepend}
        variant="outline-primary"
        title="Mobiles"
        id="input-group-dropdown-1"
      >
<Dropdown.Item href="http://localhost:3000/search/iphone">Iphone</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/samsung">Samsung</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/infinix">Infinix</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/tablets">Tablets</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/accessories">Accessories</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/mobile">Mobile Phones</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/other_phones">Other Phones</Dropdown.Item>
</DropdownButton><DropdownButton
        as={InputGroup.Prepend}
        variant="outline-primary"
        title="Furniture &amp; Home Decor"
        id="input-group-dropdown-1"
      >
        <Dropdown.Item href="http://localhost:3000/search/fish_&amp;_aquariums">Fish &amp; Aquariums</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/sofa_&amp;_chairs">Sofa &amp; Chairs</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/bed_&amp;_wardrobes">Beds &amp; Wardrobes</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/tables_&amp;_dining">Tables &amp; Dining</Dropdown.Item>
<Dropdown.Item href="http://localhost:3000/search/other_furniture">Other Furniture </Dropdown.Item>
</DropdownButton>
        
      </DropdownButton>
      <Nav.Link href="http://localhost:3000/search/mobile">Mobile Phones</Nav.Link>
      <Nav.Link href="http://localhost:3000/search/car">Cars</Nav.Link>
      <Nav.Link href="http://localhost:3000/search/motorCycles">MotorCycles</Nav.Link>
      <Nav.Link href="http://localhost:3000/search/houses">Houses</Nav.Link>
      <Nav.Link href="http://localhost:3000/search/tablets">Tablets</Nav.Link>
      <Nav.Link href="http://localhost:3000/search/land_&amp;_plots">Land &amp; Plots</Nav.Link>
    
    </InputGroup>
    
  
    
  </>
  )
}
export default NavigationBar











{/* <Dropdown.Item href="#">Cars</Dropdown.Item>
<Dropdown.Item href="#">Cars On Installments</Dropdown.Item>
<Dropdown.Item href="#">Cars Accessories</Dropdown.Item>
<Dropdown.Item href="#">Spare Parts</Dropdown.Item>
<Dropdown.Item href="#">Rickshaw / Chingchi</Dropdown.Item> */}
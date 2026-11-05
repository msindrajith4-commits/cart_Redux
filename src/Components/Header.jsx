
import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
     <Navbar expand="lg" className="bg-primary fixed-top">
      <Container>
        <Navbar.Brand ><Link to= {"/"} className="text-decoration-none fw-bold"> <FontAwesomeIcon icon={faTruckFast} />
React-Bootstrap</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <Nav.Item>
              <input type="text" className='form-control' placeholder='Search your products'/>
            </Nav.Item>

            <Link to ={"/wishlist"} className="text-decoration-none fw-bold ms-5"><FontAwesomeIcon icon={faHeart} className='btn btn danger me-2' />
</Link>
            <Link to ={"/wishlist"} className="text-decoration-none fw-bold ms-5"><FontAwesomeIcon icon={faHeart} className='btn btn sucess me-2' />
            </Link>
          

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

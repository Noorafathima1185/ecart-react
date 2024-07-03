import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';




function Header() {
  return (
    <>
    <Navbar style={{backgroundColor:'grey'}} data-bs-theme="dark" expand="lg" className="ms-3 me-3">
      <Container>
      <Link to={'/'}>
        <Navbar.Brand href="#home"><FontAwesomeIcon icon={faCartShopping} className='me-3' />E-Cart</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">

            <Nav.Link>
                <Link to={'/wishlist'}> <button className='btn border rounded me-5 mt-2'> <FontAwesomeIcon icon={faHeart} style={{color: "#ff3d3d",}} className='me-2'/>  Wishlist  <Badge bg="secondary" className='rounded ms-2'>0</Badge>
                </button> </Link>
                
            </Nav.Link>

            <Nav.Link>
                <Link to={'/cart'}> <button className='btn border rounded me-5 mt-2'> <FontAwesomeIcon icon={faCartShopping} style={{color: "#FFD43B",}} className='me-2'/>  Cart <Badge bg="secondary" className='rounded ms-2'>0</Badge> </button> </Link>
                
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header
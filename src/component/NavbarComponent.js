import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="black" variant="dark" style={{ height: '80px' }}>
        <Container className="d-flex justify-content-center">
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <span className="ml-2">Todo List</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

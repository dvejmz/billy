import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link to={`/`}>Home</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={`/new`}>New Bill</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={`/bills`}>My Bills</Link>
            </Nav.Link>
          </Nav>
        </Container> 
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Home;

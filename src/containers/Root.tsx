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
          <Navbar.Brand href="/">Billy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/new">New Bill</Nav.Link>
            <Nav.Link href="/bills">My Bills</Nav.Link>
          </Nav>
        </Container> 
      </Navbar>
      <Outlet />
    </div>
  );
}

export default Home;

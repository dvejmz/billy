import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <nav className="App-nav">
        <ul>
          <li><Link to={`/`}>Home</Link></li>
          <li><Link to={`/new`}>New Bill</Link></li>
          <li><Link to={`/bills`}>My Bills</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Home;

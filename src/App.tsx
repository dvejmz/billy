import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './containers/Home';
import Bills from './containers/Bills';
import NewBill from './containers/NewBill';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/bills',
    element: <Bills />
  },
  {
    path: '/new',
    element: <NewBill />
  }
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

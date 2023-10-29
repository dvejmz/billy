import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './containers/Home';
import Bills from './containers/Bills';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/bills',
    element: <Bills />
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

import React from 'react';
import './App.css';

import Bills from './containers/Bills';

function App() {
  return (
    <div className="App">
      <main>
        <h1>Active Bills</h1>
        <Bills />
      </main>
    </div>
  );
}

export default App;

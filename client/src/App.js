import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

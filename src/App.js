import React from 'react';
import HomePage from './pages/homepage/homepage-component';

import './App.css';
import { Route, Routes } from 'react-router-dom';

const Hats = () => (
  <div>
    <h1>Hats Component</h1>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/shop/hats' element={<Hats />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
    </Routes>
  );
}

export default App;

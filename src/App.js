import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Plants from './pages/Plants';
import Favoris from './pages/Favoris';

function App() {
  return (

      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/plantes" element={<Plants />}></Route>
          <Route path="/favoris" element={<Favoris />}></Route>
       </Routes>
      </BrowserRouter>
   

  );
}

export default App;

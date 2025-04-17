import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Plants from './pages/Plants';
import Favoris from './pages/Favoris';
import Modal from './components/Modal';

function App() {

  const [modal, setModal] = useState(false)
  const [selectedPlant, setSelectedPlant] = useState()
  const [storage, setStorage] = useState([]) 
  const [scrollYPosition, setScrollYPosition] = useState(0)
  const [testPlants, setTestPlants] = useState([])

  useEffect(() => {
      let currentStorage = localStorage.getItem("plants")
      if(currentStorage) {
         setStorage(localStorage.getItem("plants").split(','))
      }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", () => {
     setScrollYPosition(window.scrollY);
      
    })
    
  }, [])

  console.log(scrollYPosition);
  
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('https://trefle.io/api/v1/plants?token=Pzcaj-u-4zdgt6XGz3ktAI_GEi5_C5hmRhxCPIIug28');
        const data = await response.json();
        setTestPlants(data.data); // .data because Trefle nests results under "data"
      } catch (error) {
        console.error('Error fetching plants:', error);
      }
    };

    fetchPlants();
  }, []);

  console.log(testPlants);
  
  return (
    <>
    {modal &&
      <Modal selectedPlant={selectedPlant} setModal={setModal} storage={storage} setStorage={setStorage} scrollYPosition={scrollYPosition}/>
    }
      <BrowserRouter basename="/jungle">
       <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/plantes" element={<Plants  modal={modal} setModal={setModal} setSelectedPlant={setSelectedPlant} />}></Route>
          <Route path="/favoris" element={<Favoris modal={modal} setModal={setModal} setSelectedPlant={setSelectedPlant} storage={storage}/>}></Route>
       </Routes>
      </BrowserRouter>
    </>
   

  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import plantData from '../data/plantData';
import "../styles/loader.css"
import PlantsList from '../components/PlantsList';

const Favoris = ({modal, setModal, setSelectedPlant, storage}) => {
   
  const [matchingIds, setMatchingIds] = useState([]) 
  const [loadingState, setLoadingState] = useState(true) 
  const [favoritePlants, setFavoritePlants] = useState([]) 

  const getMatchingPlantId = () => {
    let ids = new Set(storage)
    
    const matchedItems = plants.filter(item => ids.has(item.id.toString()));
    
    setFavoritePlants(matchedItems)
  }

  const plants = plantData

  

  useEffect(() => {
    getMatchingPlantId()
  }, [storage])

  

  useEffect(() => {
    if(favoritePlants.length > 0) {
      setLoadingState(false)
    }
  }, [favoritePlants])

  console.log(storage);
  console.log(favoritePlants);
  

  return (
      <div>
          <Header />
          <h1>Favoris</h1>
          <div className="plantList">
          { !loadingState ? (
            
            <PlantsList setModal={setModal} setSelectedPlant={setSelectedPlant} plants={favoritePlants}/>
            
          ) : 
          <div className="loaderBox">
            <div className="loader"></div>
          </div>
            
          }
          </div>
    
      </div>
    );
};

export default Favoris;
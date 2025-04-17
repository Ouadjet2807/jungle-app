import React, {useState} from 'react';
import Header from '../components/Header';
import PlantsList from '../components/PlantsList';
import plantData from '../data/plantData';

const Plants = ({setModal, setSelectedPlant}) => {

    
  const plants = plantData

    return (
        <div>
            <Header />
          
            <div className="plantList">
                <h1>Les Plantes</h1>
                <PlantsList setModal={setModal} setSelectedPlant={setSelectedPlant} plants={plants}/>
            </div>
        </div>
    );
};

export default Plants;
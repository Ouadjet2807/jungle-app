import React from 'react';
import { useEffect } from 'react';
import Plant from './Plant';

const FavorisList = () => {

    useEffect(() => {
      getStorage()
    }, []);

    const getStorage = () => {
        window.localStorage.plants.getItem(plant.id)
    }

    return (
         <div className='favorisContainer'>
             <Plant />


        </div>
    );
};

export default FavorisList;
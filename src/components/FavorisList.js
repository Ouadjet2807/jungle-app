import React, { useEffect }  from 'react';
import Plant from './Plant';

const FavorisList = () => {

    useEffect(() => {
        window.localStorage.plants.getItem(plants.id)
    }

    );

    return (
         <div className='favorisContainer'>
             <Plant >


        </div>
    );
};

export default FavorisList;
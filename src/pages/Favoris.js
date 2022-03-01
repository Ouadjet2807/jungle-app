import React from 'react';
import Header from '../components/Header';
import Plant from '../components/Plant';


const Favoris = () => {
   
    useEffect(() => {
        window.localStorage.plants.getItem(plants.id)
    }

    );

    return (
        <div>
            <Header />
            <h1>Favoris</h1>
            <Plant plant={plant} key={plant.id} />
        </div>
    );
};

export default Favoris;
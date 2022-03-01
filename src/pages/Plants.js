import React from 'react';
import Header from '../components/Header';
import PlantList from '../components/PlantsList';

const Plants = () => {
    return (
        <div>
            <Header />
            <div className="plantList">
                <h1>Les Plantes</h1>
                <PlantList />
            </div>
        </div>
    );
};

export default Plants;
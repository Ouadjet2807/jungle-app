import React from 'react';
import Header from '../components/Header';

const Home = () => {
    return (
        <>
            <Header />
            <div  className='home'>
            <div className='title'>
                <h2>Welcome</h2>
                <h3>to the</h3>
                <h1>Jungle</h1>
            </div>
            <div className="left">
                <img className="plant" src='./home_plant.png'></img>
                <img className="shape" src='./graph.png'></img>
            </div>
           </div>
        </>
    );
};

export default Home;
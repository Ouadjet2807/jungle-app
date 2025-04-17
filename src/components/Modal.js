import React, { useEffect, useState } from 'react'
import { GiDrop } from 'react-icons/gi';
import { RiSunFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';
import { GiFlowerPot } from 'react-icons/gi';
import { IoMdClose  } from 'react-icons/io';


export default function Modal({setModal, selectedPlant, storage, setStorage, scrollYPosition}) {

    const [isFavorite, setIsFavorite] = useState(false)
   
    const handleFavorite = () => {
        let storedData = window.localStorage.plants ? window.localStorage.plants.split(",") : [];

        console.log(selectedPlant);
        
        if(isFavorite) {
            console.log('set to local storage');
            let newData = storedData.filter((id) => id != selectedPlant.id);
            localStorage.setItem('plants', newData);
            setIsFavorite(false)
          
        } else if(!storedData.includes(selectedPlant.id.toString())) {
            storedData.push(selectedPlant.id.toString());
            localStorage.setItem('plants', storedData);
            setIsFavorite(true)
          }
        console.log(storedData);
        setStorage(storedData)
  
    }

    useEffect(() => {
      if(storage.includes(selectedPlant.id.toString())) {
        setIsFavorite(true)
      }
    }, [storage])


    

  return (
    <div className='modal' style={{top: scrollYPosition}}>
      <div className="overlay" onClick={() => setModal(false)}></div>
      <div className="modalBox">
            <div className="left">
                <div style={{backgroundImage: `url(${selectedPlant.picture})`}} className="img" alt=""></div>
                </div>
                <div className="right">
                  <div className="title">
                    <h2>{selectedPlant.scientificName}</h2>
                    <h4>{selectedPlant.name}</h4>
                    <div className="close" onClick={() => setModal(false)}>
                      <IoMdClose  />
                    </div>
                  </div>
                <ul>
                    <li className={isFavorite ? `favorite` : `notFavorite`} onClick={() => handleFavorite()}>
                      <AiFillHeart /> 
                      Favoris
                    </li>
                    <li>
                      <FaMapMarkerAlt />
                      <div className="text">
                        <strong> Origine : </strong> 
                        {selectedPlant.origin}
                      </div>
                    </li>
                    <li>
                      <BsInfoLg />
                      <div className="text">
                        <strong> Famille :</strong> 
                        {selectedPlant.family}
                      </div>
                    </li>
                    <li>
                      <GiFlowerPot />
                      <div className="text">
                        <strong> Période d'épanouissement :</strong> 
                        {selectedPlant.bloomingPeriod}
                      </div>
                    </li>
                    <li>
                      <RiSunFill />
                      <div className="text">
                        <strong> Exposition :</strong> 
                        {selectedPlant.light}
                      </div>
                    </li>
                    <li>
                      <GiDrop />
                      <div className="text">
                        <strong> Arrosage :</strong> 
                        {selectedPlant.water}
                      </div>
                    </li>
                </ul>
            </div>
          </div>
        </div>
  )
}

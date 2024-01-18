import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import plantData from '../data/plantData';
import PlantFav from '../components/PlantFav';
import "../styles/loader.css"

const Favoris = () => {
   
    let favorite = ""
    let favoriteArr = ""
    const [storageID, setStorageID] = useState([]) 
    const [matchingIds, setMatchingIds] = useState([]) 
    const [loadingState, setLoadingState] = useState("not ready") 
    
    const [selectedPlant, setSelectedPlant] = useState([]) 
    
    
    const getStorage = async () => {
      
         let storedData = window.localStorage.plants ? window.localStorage.plants.split(",") : [0, ];
         window.dispatchEvent(new Event("storage"));
         
         if (storedData) {
           favorite = localStorage.getItem('plants')
           favoriteArr = favorite.split(",").map(function(str) {
             return parseInt(str);
         });
         console.log(storedData);
       } 
          
            setStorageID(favoriteArr)
            
            const plantDataIds = plantData.map(item => item.id);

            console.log(plantDataIds);
            console.log(storageID)

            
            const filteredIdArray = plantDataIds.filter((item) => storageID.includes(item))

            setMatchingIds(filteredIdArray)

            console.log(loadingState);
            const searchSelectedPlant = []
            matchingIds.forEach(id => {
              searchSelectedPlant.push(plantData.find(c => c.id === id));})
              setSelectedPlant(searchSelectedPlant);
              console.log(plantData)
              console.log(selectedPlant)
              console.log(searchSelectedPlant)

              // window.addEventListener('storage', () => {
              //   getStorage()
              // })
            }
          
            useEffect(() => { 
                getStorage() 
                window.addEventListener('storage', getStorage())
                return () => window.removeEventListener('storage', getStorage())
             }, []);
       

            useEffect(() => { 
              setTimeout(() => {
                isLoaded()

              }, 1000)  
              
          }, [getStorage]);
             
          
          console.log(matchingIds)
      
          useEffect(() => {
            isLoading()
          }, [])
          const isLoading = () => {
            setTimeout(() => {
              setLoadingState("loading")
            }, 500)
          }
          
          const isLoaded = () => { 
            if(selectedPlant.length > 0) {
              setLoadingState("ready")           

            }   
          };

          const relaunch = () => {
            setTimeout(() => {
              if (loadingState === "loading") {
                getStorage()
              }
            }, 500)
          }
      
          relaunch()
          console.log(loadingState)
          
       
        


    return (
        <div>
            <Header />
            <h1>Favoris</h1>
          
            { loadingState === "ready" ? (
              
            <div className="plantsContent">
               <div className="plants">
                {  selectedPlant.map(item => {
                              return (
                                      <PlantFav 
                                      key={item.id}
                                      item={item}
                                      />
                                      )
                                  })
                                }             
                  </div>
                </div>

            ) : 
            <div className="loaderBox">
              <div className="loader"></div>
            </div>
            
            }
    
          </div>
    );
};

export default Favoris;
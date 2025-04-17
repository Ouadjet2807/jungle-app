import React, { useState, useRef } from 'react';

export default function PlantsList({setModal, setSelectedPlant, plants}) {

  const [selectedRadio, setSelectedRadio] = useState("Tout")

  const plantRefs = useRef([]);

  

  const animationFrameRef = useRef(null);
  
  const radios = [
    {id: 1, value: "Tout"},
    {id: 2, value: "Petite"},
    {id: 3, value: "Moyenne"},
    {id: 4, value: "Grande"},
    {id: 5, value: "Grimpante"},
   ]

    const handleRadio = (event) => {
        let radio = event.target.value;
        setSelectedRadio(radio)
    }

    const selectPlant = (plant) => {
        setModal(true)
        setSelectedPlant(plant)
    }

    const handleCard = async (e, index) => {

        const card = plantRefs.current[index];

        console.log(card);
        

       if (!card) {
           return;
       } else {
        const cardRect = card.getBoundingClientRect();
        const width = cardRect.width;
        const height = cardRect.height;
        const midWidth = width / 2;
        const midHeight = height / 2;

        // Position de la souris par rapport à la carte
        const cursPosX = e.clientX - cardRect.left;
        const cursPosY = e.clientY - cardRect.top;

        // Distance par rapport au centre de la carte
        const cursCenterX = midWidth - cursPosX;
        const cursCenterY = midHeight - cursPosY;

        // Calcul des transformations
        const delta = 20; // Intensité de l'effet
        const perspective = "500px";

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          card.style.transform = `perspective(${perspective}) rotateX(${cursCenterY / delta}deg) rotateY(${-cursCenterX / delta}deg)`;
          card.classList.remove("is-out");
        });
        }
        
  };

    console.log(plants);

    const handleCardLeave = (index) => {
        const card = plantRefs.current[index];;
    
        if (!card) return;
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        card.style.transform = ""; // Réinitialise les transformations
        card.classList.add("is-out"); // Ajoute une classe pour un éventuel effet CSS
    }
    

  return (
    <>

        <ul className="radioDisplay">
            {
                radios.map((radio) => {
                    return (
                        <li key={radio.id} className={`${radio.value === selectedRadio ? 'radioChecked' : ""}`}>
                          <input 
                            type="radio"
                            name="radio"
                            value={radio.value}
                            id={radio.value}
                            onChange={(e) => handleRadio(e)}/>
                          <label htmlFor={radio.value}>{radio.value}</label>
                        </li>
                        )
                    })
                }
            </ul>
            <div className="plantsContent">
                
                <div className="plants">
                    {
                        plants
                        .filter(item => item.height.includes(selectedRadio))
                        .map((item, index) => {
                            return (
                                <div className="plant" id={`plant_${item.id}`} key={item.id} ref={(el) => (plantRefs.current[index] = el)} onClick={() => selectPlant(item)} onMouseMove={(e) => handleCard(e, index)} onMouseLeave={() => handleCardLeave(index)}>
                                 <img src={item.picture} alt=""/>
                                 <div className="content">
                                    <h3>{item.name}</h3>
                                    <h4>{item.scientificName}</h4>
                                    <h5>Origine : <span>{item.origin}</span></h5>
                                    <h5>Famille :  <span>{item.family}</span></h5>
                                    <span>{item.shortL}</span>
                                    <span>{item.shortW}</span>
                                  </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
  )
}

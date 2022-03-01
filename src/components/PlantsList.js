import React, { Component } from 'react';
import plantData from '../data/plantData';
import Plant from './Plant';

export default class PlantList extends Component { 
   
   state= {

    plants:plantData,
    radios: [
        {id: 1, value: "Tout"},
        {id: 2, value: "Petite"},
        {id: 3, value: "Moyenne"},
        {id: 4, value: "Grande"},

    ],
    selectedRadio: 'Tout'
   };

   handleRadio = (event) => {
       let radio = event.target.value;
       this.setState({selectedRadio: radio})
   }

render() {

    let {plants, radios, selectedRadio} = this.state
    return (
      <>
                <ul className="radioDisplay">
                {
                    radios.map((radio) => {
                        return (
                            <li key={radio.id}>
                            <input 
                            type="radio"
                            name="radio"
                            checked={radio.value === selectedRadio}
                            value={radio.value}
                            id={radio.value}
                            onChange={this.handleRadio}/>
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
                        .map(item => {
                            return (
                                <Plant 
                                key={item.id}
                                item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
  }
}

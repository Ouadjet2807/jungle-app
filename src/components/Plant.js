import React, { Component } from 'react';
import { GiDrop } from 'react-icons/gi';
import { RiSunFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';
import { GiFlowerPot } from 'react-icons/gi';

export default class Plant extends Component {
    state = {
        showInfo: false
    }


    handleInfo = () => {
        this.setState({
        showInfo: !this.state.showInfo
      })
    }



    render() {
       let {id, name, scientificName, origin, family, shortL, shortW, light, water, bloomingPeriod, picture} = this.props.item;

 
       const plant = {id, picture, name, scientificName, origin, family, shortL, shortW}

    

        const addStorage = () => {
             let storedData = window.localStorage.plants ? window.localStorage.plants.split(",") : [0, ];
             
             if (!storedData.includes(plant.id.toString())) {
                storedData.push(plant.id);
                window.localStorage.plants = storedData;
             } 
             
        }


        return (
            <div className="plant" >
                <img src={picture} alt="" onClick={this.handleInfo}/>
                <h3>{name}</h3>
                <h4>{scientificName}</h4>
                <h5>Origine : <span>{origin}</span></h5>
                <h5>Famille :  <span>{family}</span></h5>
                <span>{shortL}</span>
                <span>{shortW}</span>

                {
               this.state.showInfo && (
                 <div className="showInfos">
                    <div className="infosContent">
                     <div className="left">
                         <img src={picture} alt=""></img>
                     </div>
                     <div className="right">
                         <h2>{scientificName}</h2>
                         <h4>{name}</h4>

                        <ul>
                            <li className="favorite" onClick={() => addStorage()}><i><AiFillHeart /></i> Favoris</li>
                            <li><i><FaMapMarkerAlt /></i> Origine : {origin}</li>
                            <li><i><BsInfoLg /></i> Famille : {family}</li>
                            <li><i><GiFlowerPot /></i> {bloomingPeriod}</li>
                            <li><i><RiSunFill /></i> Exposition : {light}</li>
                            <li><i><GiDrop /></i> Arrosage : {water}</li>
                        </ul>
                    
                        <div className="button return" onClick={this.handleInfo}>Retour</div>
                      </div>
                    </div>
                  </div>
             ) }
         </div>
        );
    }
}

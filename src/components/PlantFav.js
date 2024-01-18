import React, { Component } from 'react';
import { GiDrop } from 'react-icons/gi';
import { RiSunFill } from 'react-icons/ri';
import { AiFillHeart } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsInfoLg } from 'react-icons/bs';
import { GiFlowerPot } from 'react-icons/gi';

export default class Plant extends Component {
    state = {
        showInfo: false,
        isFavorite : true
    }


    handleInfo = () => {
        this.setState({
        showInfo: !this.state.showInfo
      })
    }



    render() {
       let {id, name, scientificName, origin, family, shortL, shortW, light, water, bloomingPeriod, picture} = this.props.item;

 
       const plant = {id, picture, name, scientificName, origin, family, shortL, shortW}

    

        const removeStorage = () => {
            let storedData = window.localStorage.plants.split(",");
            let newData = storedData.filter((id) => id != plant.id);
        
            window.localStorage.plants = newData;
            this.setState({
                isFavorite: !this.state.isFavorite
              })
          };

        return (
            <div className="plant" >
                <div className="img_box">
                    <div style={{backgroundImage: `url(${picture})`}} alt="" className="img" onClick={this.handleInfo}/>
                </div>
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
                         <div style={{backgroundImage: `url(${picture})`}} className="img" alt=""></div>
                     </div>
                     <div className="right">
                         <h2>{scientificName}</h2>
                         <h4>{name}</h4>

                        <ul>
                        { this.state.isFavorite === true ? (
                            <li className= "favoriteChecked"onClick={() => removeStorage()}><i><AiFillHeart /></i> Favoris</li>
                        ) : 
                            <li className= "favorite"><i><AiFillHeart /></i> Favoris</li>
                        }
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

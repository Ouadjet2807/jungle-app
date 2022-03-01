import axios from 'axios';
import React, { useEffect, useState } from 'react';



const Form = () => {

    axios.get(
        `https://api.floracodex.com/`
    )
    return (
       
        <div className="form">
            <div className='form-container'>
               <form>
                  <input type="text" placeholder="Chercher une plante" id="search-input" />
                   <input type="submit" value="Rechercher" />
               </form>
             </div>
        </div>

    );
};

export default Form;
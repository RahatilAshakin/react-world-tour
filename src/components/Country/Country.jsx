
import { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry,handleVisitedFlags}) => {
    console.log(country);

    const {name, flags,borders
        , capital,cca3,population, area}=country

        const[visited, setVisited]=useState(false)

        const HandleVisit=()=>{
            setVisited(!visited)
        }

        const passWithParam=()=>handleVisitedCountry(country)
        

        // console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited ? 'visited': 'non-visited'}`}>
                <div className='capital'>
                <h3 style={{color: visited ? 'purple': 'blue'}}> Country Name: {name.common}</h3>
                <h4>Capital name: {capital}</h4>
                <h4>Population: {population} </h4>
                <p>Borders : {borders}</p>
        </div>

        <div className='flag'>
                <img src={flags.png} alt="" srcset="" />
                <p>Area: {area} SQ.km</p>
                <p><small>Code: {cca3}</small></p>
        </div>

        <div>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button> <br />
            <button onClick={HandleVisit}>{visited ? 'Visited' : 'going'}</button>
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add flag</button>
            {visited ? 'I Have Gesi Ekhanme' : 'i WANT zaite Chai' }
        </div>

        
        </div>
    );
};

export default Country;
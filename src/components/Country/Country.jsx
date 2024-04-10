
import './country.css'

const Country = ({country}) => {
    console.log(country);

    const {name, flags,borders
        , capital, area}=country
    return (
        <div className='country'>
           <h3> Country Name: {capital}</h3>
           <h4>Capital name: {name?.capital}</h4>
           <p>Borders : {borders}</p>
           <img src={flags.png} alt="" srcset="" />
           <p>Area: {area} SQ.km</p>
           
        </div>
    );
};

export default Country;
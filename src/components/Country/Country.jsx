import { useState } from 'react';
import './County.css'
const Country = ({ country, handelVisitedCountries }) => {
    console.log(country)
    const { name, flags, population, area, cca2 } = country;
    const [visited, setVisited] = useState(false);
    const handelClick = () => {
        setVisited(!visited)
    }
    return (
        <div className={`box ${visited ? 'visited' : 'none-visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'black' }}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area:{area} </p>
            <small>Code:{cca2} </small>
            <br />
            <button onClick={() => handelVisitedCountries(country)}>Mark Visited</button>
            <button onClick={handelClick}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have visited this country' : 'i want to visit'}
        </div>
    );
};

export default Country;
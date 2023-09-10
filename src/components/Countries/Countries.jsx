import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './contries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handelVisitedCountries = country =>{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
            <h3>Countries:{countries.length} </h3>
            <div>
                <h3>Visited countries:{visitedCountries.length} </h3>
                {
                    visitedCountries.map(visitCountry => <li> {visitCountry.name.common}</li>)
                }
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country key={country.ccn3
                    } country={country} handelVisitedCountries ={handelVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

Countries.propTypes = {

};

export default Countries;
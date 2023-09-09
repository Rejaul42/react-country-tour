import './County.css'
const Country = ({country}) => {
    console.log(country)
    const {name, flags, population, area
    } =country;
    return (
        <div className='box'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area:{area} </p>
        </div>
    );
};

export default Country;
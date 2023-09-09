import './County.css'
const Country = ({country}) => {
    console.log(country)
    const {name, flags} =country;
    return (
        <div className='box'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;
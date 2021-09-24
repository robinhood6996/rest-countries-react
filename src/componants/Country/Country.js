import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, capital, flag, population } = props.country;
    return (
        <div className="countries">
            <h3>{name}</h3>
            <h5>Capital: {capital}</h5>
            <h6>Population: {population}</h6>
            <img src={flag} alt="" />

        </div>
    );
};

export default Country;
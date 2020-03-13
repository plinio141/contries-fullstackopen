import React from 'react'

const Country = ({ country }) => {
    console.log(country);
    
    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h4>languages</h4>
            <ul>
                {country.languages.map(l => <li>{l.name}</li>)}
            </ul>
            <img src={country.flag} alt={country.flag}/>
        </div>
    )
}

export default Country
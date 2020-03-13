import React from 'react'

const Countries = ({ countries, showCountry }) => (
    <div>
        {countries.map(c => <li>{c.name} <button onClick={() => showCountry(c)}>Show</button></li>)}
    </div>
)

export default Countries
import React, { useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/countries'
import Country from './components/country'

const App = () => {
  const [ countries, setCountries] = useState()
  const [ country, setCountry] = useState()

  const [ filterInput, setFilterInput ] = useState('')

  const find = (value) => {
    value !== '' &&
    axios
      .get(`https://restcountries.eu/rest/v2/name/${value}`)
      .then(response => {
        if(response.data.length > 1){
          setCountries(response.data);
          setCountry()
        } else {
          setCountries();
          setCountry(response.data[0]);
        }
        
      })
  }

  const handleFilterChange = (event) => {
    setFilterInput(event.target.value)
    find(event.target.value);
  }

  const getCountries = () => (
    <Countries countries={countries} showCountry={showCountry} />
  )

  const getCountry = () => (
    <Country country={country} />
  )

  const showCountry = (c) => {
    setCountries();
    setCountry(c);
  }

  return (
    <div>
      <Filter filterInput={filterInput} handleFilterChange={handleFilterChange}/>
      {countries && countries.length < 10 && getCountries()}
      {country  && getCountry()}
      {countries && countries.length >= 10 && 'to many matches, specify another filter'}
    </div>
  )
}

export default App

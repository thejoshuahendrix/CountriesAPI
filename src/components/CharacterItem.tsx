import React from 'react'

const CharacterItem = ({country}) => {
  
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
        <h1>{country.name}</h1>
        </div>
        <div className='card-back'>
          <h1>{country.name}</h1>
          <ul>
            <li>
              <strong>Region:</strong> {country.region}
            </li>
            <li>
              <strong>Capital:</strong> {country.capital}
            </li>
            <li>
              <strong>Population:</strong> {numberWithCommas(country.population)}
            </li>
            <li>
              <strong>Sub-Region:</strong> {country.subregion}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CharacterItem

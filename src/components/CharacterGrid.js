import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'

const CharacterGrid = ({ countries, isLoading }) => {
    return isLoading ? (
        <div>
            <Spinner />
        </div>
    ) : (
        <section className="cards" >
            {countries.map(country => (
                <CharacterItem key={country.char_id} country={country}></CharacterItem>
                
            )
            )}
        </section>
    )
}

export default CharacterGrid

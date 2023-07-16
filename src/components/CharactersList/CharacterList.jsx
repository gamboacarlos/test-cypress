import React, { useEffect, useState } from 'react'
import { listWrapper, listBody, searchInput } from "./styles.module.scss"
import CharacterCard from '../CharacterCard/CharacterCard'
import { useCharactersList } from '../../hooks/useCharactersList'
import { useNavigate } from 'react-router-dom'

const CharacterList = () => {

  const { data, isSuccess } = useCharactersList()

  const [characters, setCharacters] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    if(isSuccess){
      setCharacters(data)
    }
  }, [isSuccess])
  
  const handleChange = (evt) => {
    const search = data.filter((char) => char.name.toLowerCase().includes(evt.target.value.toLowerCase()))
    setCharacters(search)
  }

  const handleCharacterDetails = (id) => navigate(`/character/${id}`)

  return (
    <div className={listWrapper}>
      <div className={searchInput}>
      <input type="text" name="search" placeholder='Search' onChange={handleChange} />
      </div>
        <div className={listBody}>
            {
              isSuccess && characters ? characters.map((char) => {
                return(
                  <CharacterCard charData={char} key={char.id} onClick={() => handleCharacterDetails(char.id)} />
                )
              }) : null
            }
        </div>
    </div>
  )
}

export default CharacterList
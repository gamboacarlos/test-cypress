import React from 'react'
import { cardWrapper, cardBody, cardInfo } from "./styles.module.scss"

const CharacterCard = ({charData, onClick}) => {
    const { name, image, status, species } = charData
    
    return (
    <div className={cardWrapper} onClick={onClick}>
        <div className={cardBody}>
            <img src={image} alt={name} />
        <div className={cardInfo}>
            <h3>{name}</h3>
            <p>Species: <span>{species}</span></p>
            <p>Status: <span>{status}</span></p>
        </div>
        </div>
    </div>
  )
}

export default CharacterCard
import React from 'react'
import { detailWrapper, detailField, detailImage, detailInfo, detailInfoContainer } from "./styles.module.scss"

const CharacterDetail = ({ character }) => {
    const { name, image, species, status, gender, episode, origin } = character
    return (
        <div className={detailWrapper}>
            <div className={detailInfoContainer}>
                <h1>{name}</h1>
                <div className={detailInfo}>
                    <div className={detailField}>
                        <p>Species:</p>
                        <p>{species}</p>
                    </div>
                    <div className={detailField}>
                        <p>Status:</p>
                        <p>{status}</p>
                    </div>
                    <div className={detailField}>
                        <p>Gender:</p>
                        <p>{gender}</p>
                    </div>
                    <div className={detailField}>
                        <p>Episodes:</p>
                        <p>{episode.length}</p>
                    </div>
                    <div className={detailField}>
                        <p>Origin:</p>
                        <p>{origin.name}</p>
                    </div>
                </div>
            </div>
            <div className={detailImage}>
                <img src={image} alt={name} />
            </div>
        </div>
    )
}

export default CharacterDetail
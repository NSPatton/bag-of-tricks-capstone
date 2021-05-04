import React from "react"
import "./CharacterCard.css"
import {Link} from "react-router-dom"

export const CharacterCard = ({character, handleDeleteCharacter}) => {
    return (
            <div className="cards">
                <div className="card-content">
                    <div className="characters">
                        <div className="character">
                        <h3>Character Name: {character.name}</h3>
                        <p>Level: {character.level}</p>
                        <p>Class: {character.class.name}</p>
                        <p>Campaign: {character.campaign}</p>
                        <Link to={`/characters/${character.id}`}>
                            <button>View</button>
                        </Link>
                        <button className="btn-primary" type="button" onClick={() => handleDeleteCharacter(character.id)}>Delete</button>
                    </div>
                </div>
            </div>
            </div>
    )
}
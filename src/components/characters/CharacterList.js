import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {CharacterCard} from "./CharacterCard";
import {updateCharacter, deleteCharacter, getCharactersByUser} from "../../modules/CharacterModule"
import "./CharacterCard.css"

export const CharacterList = () => {
//We're getting the current user stored in session storage. Check current user in session storage in application in dev tools
    const currentUser = JSON.parse(sessionStorage.getItem("app_user_id"))
    
    const history = useHistory()

    const [characters, setCharacters] = useState([]);

    const getCharacters = () => {
        return getCharactersByUser(currentUser).then(charactersFromAPI => {
            setCharacters(charactersFromAPI)
        })
    }

    const handleDeleteCharacter = id => {
        deleteCharacter(id)
        .then(() => getCharacters())
    }

    useEffect(() => {
        getCharacters(currentUser)
    }, [])

    return (
        <>
        <div className="container-cards">
            {characters.map(character =>
                <CharacterCard key={character.id} character={character} handleDeleteCharacter={handleDeleteCharacter} /> )}
        </div>
        </>
    )


}
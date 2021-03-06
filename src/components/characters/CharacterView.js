import React, {useState, useEffect} from "react";
import {getCharacterById} from "../../modules/CharacterModule"
import {useHistory, Link} from "react-router-dom"
import {useParams} from "react-router"
import { getFeatureByCharacterId } from "../../modules/FeatureModule";
import { getStrategiesByCharacterId } from "../../modules/StrategiesModule";
import { CharacterList } from "./CharacterList";
import {FeatureList} from "../features/FeatureList"
import {StrategiesList} from "../strategies/StrategiesList"

export const CharacterView = () => {
    const [character, setCharacter] = useState({
        name: "",
        level: "",
        classId: 0
    })

    const [feature, setFeature] = useState([])

    const [strategy, setStrategy] = useState([])

    const [isLoading, setIsLoading] = useState(true)
    //useParams will look for that specific character Ids information
    const {characterId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getCharacterById(characterId)
        .then(character => {
            setCharacter(
               character
            )
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        getFeatureByCharacterId(characterId)
        .then(feature => {
            setFeature(
                feature
            )
        })

    }, [])

    useEffect(() => {
        getStrategiesByCharacterId(characterId)
        .then(strategy => {
            setStrategy(
                strategy
            )
        })
    }, [])

    return (
        <>
        <section className="character">
           <div> <h2 className="character__name">{character.name}</h2> </div>
            <div className="character__level">Level: {character.level}</div>
            <div className="character__class">Class: {character.class?.name}</div>
            <div className="character__campaign">Campaign: {character.campaign}</div>
        </section>
            {/* This ternary will display lists based on the current character id */}
            <div className="feature_list">
            <section className="features">
                {character.id && <FeatureList characterId={character.id} />}
            </section>
            <section className="strategies">
                {character.id &&<StrategiesList characterId={character.id} />}
            </section>
            </div>
        </>
    )
}
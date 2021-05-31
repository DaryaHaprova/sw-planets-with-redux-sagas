import React from 'react'
import { IPlanet } from '../../store/planets/types'
import styles from './PlanetListItem.module.css'

type IPlanetProps = {
    planet: IPlanet
    isActive: boolean
    setActivePlanet: (planet: IPlanet) => void
}

export const PlanetsListItem = ({
    planet,
    isActive,
    setActivePlanet,
}: IPlanetProps) => {
    return (
        <li
            onClick={() => setActivePlanet(planet)}
            className={`${styles.planetItem} ${isActive && styles.active}`}
        >
            {planet.name}
        </li>
    )
}

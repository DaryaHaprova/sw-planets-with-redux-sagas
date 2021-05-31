import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './MainContainer.module.css'

import {
    getPendingSelector,
    getPlanetsSelector,
    getErrorSelector,
} from 'store/planets/selectors'
import { fetchPlanetsRequest } from 'store/planets/actions'
import { IPlanet } from 'store/planets/types'

import { PlanetsListItem, PlanetDescription } from 'components'

export const MainContainer = () => {
    const dispatch = useDispatch()
    const pending = useSelector(getPendingSelector)
    const planets = useSelector(getPlanetsSelector)
    const error = useSelector(getErrorSelector)

    const [activePlanet, setActivePlanet] = useState<IPlanet | null>(null)

    useEffect(() => {
        dispatch(fetchPlanetsRequest())
    }, [dispatch])

    useEffect(() => {
        if (planets.length) {
            setActivePlanet(planets[0])
        }
    }, [planets])

    return (
        <div className={styles.mainContainer} data-testid="main-container">
            {pending ? (
                <div data-testid="loading">Loading...</div>
            ) : error ? (
                <div data-testid="error">Error</div>
            ) : (
                <ul className={styles.planetsList} data-testid="planets-list">
                    {planets.map(planet => (
                        <PlanetsListItem
                            setActivePlanet={setActivePlanet}
                            isActive={planet.name === activePlanet?.name}
                            planet={planet}
                            key={planet.name}
                        />
                    ))}
                </ul>
            )}
            {activePlanet && <PlanetDescription planet={activePlanet} />}
        </div>
    )
}

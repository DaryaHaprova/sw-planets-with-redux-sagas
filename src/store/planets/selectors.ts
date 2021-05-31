import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'
import { IPlanet } from './types'

const getPending = (state: AppState) => state.planets.pending

const getPlanets = (state: AppState) => state.planets.planets

const getError = (state: AppState) => state.planets.error

export const getPlanetsSelector = createSelector(
    getPlanets,
    (planets: IPlanet[]) => planets
)

export const getPendingSelector = createSelector(
    getPending,
    (pending: boolean) => pending
)

export const getErrorSelector = createSelector(
    getError,
    (error: string | null) => error
)

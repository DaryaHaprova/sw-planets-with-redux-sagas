import {
    FETCH_PLANETS_REQUEST,
    FETCH_PLANETS_SUCCESS,
    FETCH_PLANETS_FAILURE,
} from './actionTypes'

export interface IPlanet {
    climate: string
    created: string
    diameter: string
    edited: string
    films: string[]
    gravity: string
    name: string
    orbital_period: string
    population: string
    residents: string[]
    rotation_period: string
    surface_water: string
    terrain: string
    url: string
}

export interface PlanetsState {
    pending: boolean
    planets: IPlanet[]
    error: string | null
}

export interface FetchPlanetsSuccessPayload {
    planets: IPlanet[]
}

export interface FetchPlanetsFailurePayload {
    error: string
}

export interface FetchPlanetsRequest {
    type: typeof FETCH_PLANETS_REQUEST
}

export type FetchPlanetsSuccess = {
    type: typeof FETCH_PLANETS_SUCCESS
    payload: FetchPlanetsSuccessPayload
}

export type FetchPlanetsFailure = {
    type: typeof FETCH_PLANETS_FAILURE
    payload: FetchPlanetsFailurePayload
}

export type PlanetsActions =
    | FetchPlanetsRequest
    | FetchPlanetsSuccess
    | FetchPlanetsFailure

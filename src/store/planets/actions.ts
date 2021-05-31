import {
    FETCH_PLANETS_REQUEST,
    FETCH_PLANETS_FAILURE,
    FETCH_PLANETS_SUCCESS,
} from './actionTypes'
import {
    FetchPlanetsRequest,
    FetchPlanetsSuccess,
    FetchPlanetsSuccessPayload,
    FetchPlanetsFailure,
    FetchPlanetsFailurePayload,
} from './types'

export const fetchPlanetsRequest = (): FetchPlanetsRequest => ({
    type: FETCH_PLANETS_REQUEST,
})

export const fetchPlanetsSuccess = (
    payload: FetchPlanetsSuccessPayload
): FetchPlanetsSuccess => ({
    type: FETCH_PLANETS_SUCCESS,
    payload,
})

export const fetchPlanetsFailure = (
    payload: FetchPlanetsFailurePayload
): FetchPlanetsFailure => ({
    type: FETCH_PLANETS_FAILURE,
    payload,
})

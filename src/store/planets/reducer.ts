import {
    FETCH_PLANETS_REQUEST,
    FETCH_PLANETS_SUCCESS,
    FETCH_PLANETS_FAILURE,
} from './actionTypes'

import { PlanetsActions, PlanetsState } from './types'

const initialState: PlanetsState = {
    pending: false,
    planets: [],
    error: null,
}

const planetsReducer = (state = initialState, action: PlanetsActions) => {
    switch (action.type) {
        case FETCH_PLANETS_REQUEST:
            return {
                ...state,
                pending: true,
            }
        case FETCH_PLANETS_SUCCESS:
            return {
                ...state,
                pending: false,
                planets: action.payload.planets,
                error: null,
            }
        case FETCH_PLANETS_FAILURE:
            return {
                ...state,
                pending: false,
                planets: [],
                error: action.payload.error,
            }
        default:
            return {
                ...state,
            }
    }
}

export default planetsReducer

import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'

import { fetchPlanetsFailure, fetchPlanetsSuccess } from './actions'
import { FETCH_PLANETS_REQUEST } from './actionTypes'
import { IPlanet } from './types'

export interface ResponseGenerator {
    config?: any
    data?: any
    headers?: any
    request?: any
    status?: number
    statusText?: string
}

const getPlanets = () => axios.get<IPlanet[]>('https://swapi.dev/api/planets')

/*
  Worker Saga: Fired on FETCH_PLANETS_REQUEST action
*/
function* fetchPlanetsSaga() {
    try {
        const response: ResponseGenerator = yield call(getPlanets)
        yield put(
            fetchPlanetsSuccess({
                planets: response.data.results,
            })
        )
    } catch (e) {
        yield put(
            fetchPlanetsFailure({
                error: e.message,
            })
        )
    }
}

/*
  Starts worker saga on latest dispatched `FETCH_PLANETS_REQUEST` action.
  Allows concurrent increments.
*/
function* planetsSaga() {
    yield all([takeLatest(FETCH_PLANETS_REQUEST, fetchPlanetsSaga)])
}

export default planetsSaga

import { combineReducers } from 'redux'

import planetsReducer from './planets/reducer'

const rootReducer = combineReducers({
    planets: planetsReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer

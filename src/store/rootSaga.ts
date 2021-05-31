import { all, fork } from 'redux-saga/effects'

import planetsSaga from './planets/sagas'

export function* rootSaga() {
    yield all([fork(planetsSaga)])
}

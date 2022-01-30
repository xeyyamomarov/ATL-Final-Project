import { all, fork } from 'redux-saga/effects';
import { usersSaga } from './Users/sagas';
import { cardsSaga } from './Cards/sagas';

export default function* rootSaga(){
    yield all([
        fork(usersSaga),
        fork(cardsSaga)
    ])
}
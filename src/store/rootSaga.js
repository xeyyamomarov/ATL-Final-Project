import { all, fork } from 'redux-saga/effects';
import { usersSaga } from './Users/sagas';

export default function* rootSaga(){
    yield all([
        fork(usersSaga)
    ])
}
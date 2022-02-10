import { all, fork } from 'redux-saga/effects';
import { usersSaga } from './Users/sagas';
import { cardsSaga } from './Cards/sagas';
import { userRolesSaga } from './UserRoles/sagas';
import { queriesSaga } from './Queries/sagas';
import { employeesSaga } from './Employees/sagas ';

export default function* rootSaga(){
    yield all([
        fork(usersSaga),
        fork(cardsSaga),
        fork(userRolesSaga),
        fork(queriesSaga),
        fork(employeesSaga),
    ])
}
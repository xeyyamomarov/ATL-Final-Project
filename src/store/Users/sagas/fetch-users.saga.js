import {takeLatest, put, call} from 'redux-saga/effects';
import { USERS_ACTION_TYPES } from '../users.action-types';
import { getUserData } from '../../../lib/api/users';
import * as USERS_ACTIONS from '../users.actions';

function* fetchUsers(action){
    yield put(USERS_ACTIONS.setUsersLoading())
    try{
        const users = yield call(getUserData, action.payload)
        yield put(USERS_ACTIONS.setUsers(users.data));

    }catch(error){
        yield put(USERS_ACTIONS.setUsersError(error.message))
    }
}


function* watchFetchUsers(){
    yield takeLatest(USERS_ACTION_TYPES.FETCH_USERS, fetchUsers)
}

export {
    watchFetchUsers
}
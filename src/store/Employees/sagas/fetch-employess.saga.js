import {takeLatest, put, call} from 'redux-saga/effects';
import { EMPLOYEES_ACTION_TYPES } from '../employees.action-types';
import { getEmployeesData } from '../../../lib/api/employees';
import { EMPLOYEES_ACTIONS } from '..'

function* fetchEmployees(){
    yield put(EMPLOYEES_ACTIONS.setEmployeesLoading())
    try{
        const employees = yield call(getEmployeesData)
        yield put(EMPLOYEES_ACTIONS.setEmployees(employees));

    }catch(error){
        yield put(EMPLOYEES_ACTIONS.setEmployeesError(error.message))
    }
}


function* watchFetchEmployees(){
    yield takeLatest(EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEES, fetchEmployees)
}

export {
    watchFetchEmployees
}
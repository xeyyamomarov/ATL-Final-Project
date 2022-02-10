import {takeEvery} from 'redux-saga/effects';
import { EMPLOYEES_ACTION_TYPES } from '../employees.action-types';

function* deleteEmployees(){
    yield console.log("deleteUsers was called");
}


function* watchDeleteEmployees(){
    yield takeEvery(EMPLOYEES_ACTION_TYPES.DELETE_EMPLOYEES, deleteEmployees)
}

export {watchDeleteEmployees}
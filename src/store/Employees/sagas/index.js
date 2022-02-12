import { all, fork } from "redux-saga/effects";
import { watchFetchEmployees } from "./fetch-employess.saga"; 
import { watchDeleteEmployees } from './delete-employees.saga';


function* employeesSaga(){
    yield all([
        fork(watchFetchEmployees),
        fork(watchDeleteEmployees),
    ])
}

export {employeesSaga};
import { takeEvery } from "redux-saga/effects";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types"

function* deleteEmployees(){
    yield console.log("deleteEmployees was called");
}

function* watchDeleteEmployees(){
    yield takeEvery(MAINPAGE_ACTION_TYPES.DELETE_EMPLOYEES,deleteEmployees)
}

export {
    watchDeleteEmployees
}
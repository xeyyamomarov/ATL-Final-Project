import { takeEvery } from "redux-saga/effects";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";


function* deleteLastQueries(){
    yield console.log("deleteLastQueries was called");
}

function* watchDeleteLastQueries(){
    yield takeEvery(MAINPAGE_ACTION_TYPES.DELETE_LASTQUERIES,deleteLastQueries)
}

export {
    watchDeleteLastQueries
}
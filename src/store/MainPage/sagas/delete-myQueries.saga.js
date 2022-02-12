import { takeEvery } from "redux-saga/effects";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";


function* deleteMyQueries(){
    yield console.log("deleteMyQueries was called");
}

function* watchDeleteMyQueries(){
    yield takeEvery(MAINPAGE_ACTION_TYPES.DELETE_MYQUERIES,deleteMyQueries)
}

export {
    watchDeleteMyQueries
}
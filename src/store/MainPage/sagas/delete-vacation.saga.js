import { takeEvery } from "redux-saga/effects";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";




function* deleteVacation(){
    yield console.log("deleteVacation was called");
}

function* watchDeleteVacation(){
    yield takeEvery(MAINPAGE_ACTION_TYPES.DELETE_VACATION,deleteVacation)
}

export {
    watchDeleteVacation
}
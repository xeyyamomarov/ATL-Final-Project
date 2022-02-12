import { takeEvery } from "redux-saga/effects";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";



function* deleteTrip(){
    yield console.log("deleteTrip was called");
}

function* watchDeleteTrip(){
    yield takeEvery(MAINPAGE_ACTION_TYPES.DELETE_TRIP,deleteTrip)
}

export {
    watchDeleteTrip
}
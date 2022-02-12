import { takeEvery } from "redux-saga/effects";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";



function* deleteAdvertisements(){
    yield console.log("deleteTrip was called");
}

function* watchDeleteTAdvertisements(){
    yield takeEvery(MAINPAGE_ACTION_TYPES.DELETE_ADVERTISEMENTS,deleteAdvertisements)
}

export {
    watchDeleteTAdvertisements
}
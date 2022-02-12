import { takeEvery } from "redux-saga/effects";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";




function* deleteNextBirthdays(){
    yield console.log("deleteNextBirthdays was called");
}

function* watchDeleteNextBirthdays(){
    yield takeEvery(MAINPAGE_ACTION_TYPES.DELETE_NEXTBIRTHDAYS,deleteNextBirthdays)
}

export {
    watchDeleteNextBirthdays
}
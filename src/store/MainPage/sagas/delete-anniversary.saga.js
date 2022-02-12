import { takeEvery } from "redux-saga/effects";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";

function* deleteAnniversary(){
    yield console.log("deleteAnniversary was called");
}

function* watchDeleteAnniversary(){
    yield takeEvery(MAINPAGE_ACTION_TYPES.DELETE_ANNIVERSARY,deleteAnniversary)
}
export {
    watchDeleteAnniversary
}
import { takeEvery } from "redux-saga/effects";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";




function* deleteDayOff(){
    yield console.log("deleteDayOff was called");
}

function* watchDeleteDayOff(){
    yield takeEvery(MAINPAGE_ACTION_TYPES.DELETE_DAYOFF,deleteDayOff)
}
export {
    watchDeleteDayOff
}
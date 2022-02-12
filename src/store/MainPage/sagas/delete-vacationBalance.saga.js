import { takeEvery } from "redux-saga/effects";
import { MAINPAGE_ACTION_TYPES } from "store/MainPage/mainPage.action-types";




//VACATIONBALANCE

function* deleteVacationBalance(){
    yield console.log("deleteTrip was called");
}

function* watchDeleteVacationBalance(){
    yield takeEvery(MAINPAGE_ACTION_TYPES.DELETE_VACATIONBALANCE,deleteVacationBalance)
}

export {
    
    
    watchDeleteVacationBalance
}
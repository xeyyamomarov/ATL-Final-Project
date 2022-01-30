import { takeEvery } from "redux-saga/effects";
import { USERS_ACTION_TYPES } from "store/Users/users.action-types";

function* deleteCards(){
    yield console.log("deleteCards was called");
}

function* watchDeleteCards(){
    yield takeEvery(USERS_ACTION_TYPES.DELETE_USERS,deleteCards)
}

export {
    watchDeleteCards
}
import { takeEvery } from "redux-saga/effects";
import { CARDS_ACTION_TYPES } from "store/Cards/cards.action-types";

function* deleteCards(){
    yield console.log("deleteCards was called");
}

function* watchDeleteCards(){
    yield takeEvery(CARDS_ACTION_TYPES.DELETE_CARDS,deleteCards)
}

export {
    watchDeleteCards
}
import { all,fork } from "redux-saga/effects";
import { watchDeleteCards } from "./delete-cards.saga";
import { watchFetchCards } from "./fetch-cards.saga";

function* cardsSaga(){
    yield all([
        fork(watchFetchCards),
        fork(watchDeleteCards)
    ])
}
export {
    cardsSaga
}
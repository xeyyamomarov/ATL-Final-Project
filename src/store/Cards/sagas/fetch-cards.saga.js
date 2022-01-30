import { takeLatest,put,call } from "redux-saga/effects";
import { getCardsData } from "lib/api/cards";
import { CARDS_ACTIONS } from "..";
import { CARDS_ACTION_TYPES } from "store/Cards/cards.action-types"

function* fetchCards(action){
    yield put(CARDS_ACTIONS.setCardsLoading())
    try{
        const cards=yield call(getCardsData,action.payload)
        yield put(CARDS_ACTIONS.setCards(cards.data))
        console.log(cards);
    }
    catch(error){
        yield put(CARDS_ACTIONS.setCardsError(error.message))
    }
}

function* watchFetchCards(){
    yield takeLatest(CARDS_ACTION_TYPES.FETCH_CARDS,fetchCards)
}
export {
    watchFetchCards
}
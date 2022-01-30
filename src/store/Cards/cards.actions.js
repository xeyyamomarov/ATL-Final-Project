import { CARDS_ACTION_TYPES } from "./cards.action-types";

export const setCards=(data)=>({type:CARDS_ACTION_TYPES.SET_CARDS,payload:data})
export const fetchCards=()=>({type:CARDS_ACTION_TYPES.FETCH_CARDS})
export const setCardsLoading=()=>({type:CARDS_ACTION_TYPES.SET_CARDS_LOADING})
export const setCardsError=(error)=>({type:CARDS_ACTION_TYPES.SET_CARDS_ERROR,payload: error})
import { CARDS_ACTION_TYPES } from "./cards.action-types";

const cardsInit = {
  data: {},
  loading: false,
  error: "",
};

export const cardsReducer = (store = cardsInit, action) => {
  switch (action.type) {
    case CARDS_ACTION_TYPES.SET_CARDS:
      return {
        ...store,
        ...cardsInit,
        data: action.payload,
      };

    case CARDS_ACTION_TYPES.SET_CARDS_LOADING:
      return {
        ...store,
        ...cardsInit,
        loading: true,
      };
    case CARDS_ACTION_TYPES.SET_CARDS_ERROR:
      return {
        ...store,
        ...cardsInit,
        error: action.payload,
      };
    default:
      return store;
  }
};

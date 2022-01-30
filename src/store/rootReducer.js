import { combineReducers } from 'redux';
import { usersReducer } from './Users/users.reducer';
import { cardsReducer } from './Cards/cards.reducer';

export default combineReducers({
  users: usersReducer,
  cards:cardsReducer,
})
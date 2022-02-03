import { combineReducers } from 'redux';
import { togglesReducer } from './Toggles/toggles.reducer';
import { usersReducer } from './Users/users.reducer';
import { cardsReducer } from './Cards/cards.reducer';

export default combineReducers({
  users: usersReducer,
  cards:cardsReducer,
  toggles: togglesReducer,
})
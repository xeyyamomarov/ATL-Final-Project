import { combineReducers } from 'redux';
import { togglesReducer } from './Toggles/toggles.reducer';
import { usersReducer } from './Users/users.reducer';

export default combineReducers({
  users: usersReducer,
  toggles: togglesReducer,
})
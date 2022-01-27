import { combineReducers } from 'redux';
import { usersReducer } from './Users/users.reducer';

export default combineReducers({
  users: usersReducer
})
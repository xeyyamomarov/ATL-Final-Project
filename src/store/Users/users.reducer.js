import { USERS_ACTION_TYPES } from './users.action-types';

const usersInit = {
  users: []
};


export const usersReducer = (store = usersInit, action) => {
  switch (action.type) {
    case USERS_ACTION_TYPES.SET_USERS:
      return {
        ...store,
        users: action.data
      };

    default: return store;
  }
}
import { USERS_ACTION_TYPES } from './users.action-types';

const usersInit = {
  data: {}
};


export const usersReducer = (store = usersInit, action) => {
  switch (action.type) {
    case USERS_ACTION_TYPES.SET_USERS:
      return {
        ...store,
        data: action.data
      };

    default: return store;
  }
}
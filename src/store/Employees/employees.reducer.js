import { EMPLOYEES_ACTION_TYPES } from './employees.action-types';

const employeesInit = {
  data: {},
  loading: false,
  error: ''
}


export const employeesReducer = (store = employeesInit, action) => {
  switch (action.type) {
    case EMPLOYEES_ACTION_TYPES.SET_EMPLOYEES:
      return {
        ...store,
        ...employeesInit,
        data: action.data
      };
    case EMPLOYEES_ACTION_TYPES.SET_EMPLOYEES_LOADING:
      return {
        ...store,
        ...employeesInit,
        loading: true,
      }
    case EMPLOYEES_ACTION_TYPES.SET_EMPLOYEES_ERROR:
      return {
        ...store,
        ...employeesInit,
        error: action.data
      }

    default: return store;
  }
}
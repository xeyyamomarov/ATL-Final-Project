import { EMPLOYEES_ACTION_TYPES } from "./employees.action-types";

export const setEmployees = (data) => ({type: EMPLOYEES_ACTION_TYPES.SET_EMPLOYEES, data });
export const fetchEmployees = (data) => ({type: EMPLOYEES_ACTION_TYPES.FETCH_EMPLOYEES, data });
export const setEmployeesLoading = () => ({type: EMPLOYEES_ACTION_TYPES.SET_EMPLOYEES_LOADING });
export const setEmployeesError = (error) => ({type: EMPLOYEES_ACTION_TYPES.SET_EMPLOYEES_ERROR, data: error });
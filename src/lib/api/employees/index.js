import AXIOS from '../index';

export const getEmployeesData = () => AXIOS.get('employeesAll').then(res=> res.data);

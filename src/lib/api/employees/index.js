import AXIOS from '../index';

export const getEmployeesData = () => AXIOS.get('employees').then(res=> res.data);

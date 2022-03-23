import AXIOS from '../index';

export const getUserData = () => AXIOS.get('users').then(res=> res.data);
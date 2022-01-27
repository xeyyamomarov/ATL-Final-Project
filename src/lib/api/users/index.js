import AXIOS from '../index';

// export const getUsers = (page) => AXIOS.get('users', {params: {page}}).then(res=> res.data);
export const getUserData = () => AXIOS.get('users').then(res=> res.data);

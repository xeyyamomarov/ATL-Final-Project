import AXIOS from '../index';

export const getUserData = (page, count) => AXIOS.get('users', { params: {page, count} }).then(res=> res.data);

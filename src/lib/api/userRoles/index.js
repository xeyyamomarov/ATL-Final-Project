import AXIOS from '../index';

export const getUserRolesData = (page, count) => AXIOS.get('userroles', { params: {page, count} }).then(res=> res.data);

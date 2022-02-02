import AXIOS  from "../index";

export const getCardsData=()=>AXIOS.get('mainpage').then(res=>res.data);
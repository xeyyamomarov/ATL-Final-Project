import AXIOS  from "../index";

export const getCardsData=()=>AXIOS.get('myDatas').then(res=>res.data);
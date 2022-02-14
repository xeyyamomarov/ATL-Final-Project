import {VacationBalanceTableHeader} from "./VacationBalanceTableHeader"
import {Table} from "components/Table";

export const VacationBalanceTable=({data})=>{
    const thead=VacationBalanceTableHeader()
    return  <Table tbody={data} thead={thead} />


}
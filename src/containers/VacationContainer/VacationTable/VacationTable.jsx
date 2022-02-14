import {Table} from "components/Table";
import { VacationTableHeader } from "./VacationTableHeader";


export const VacationTable=({data})=>{
    const thead= VacationTableHeader()

   return  <Table tbody={data} thead={thead} />

 
}
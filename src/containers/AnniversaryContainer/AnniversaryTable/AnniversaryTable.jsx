import { AnniversaryTableHeader } from "./AnniversaryTableHeader";
import { Table } from "components/Table";

export const AnniversaryTable=({data})=>{

    const thead= AnniversaryTableHeader()
    return <Table tbody={data} thead={thead} />

}
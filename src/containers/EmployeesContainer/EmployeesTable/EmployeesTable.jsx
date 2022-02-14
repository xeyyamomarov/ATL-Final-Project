import { EmployeesTableHeader } from "./EmployeesTableHeader";
import { Table } from "components/Table";

export const EmployeesTable=({data})=>{
    const thead= EmployeesTableHeader()
    return <Table thead={thead} tbody={data} />
}
import {TableBody,TableCell,Table,TableHead,TableRow} from '@mui/material';
function createData( name, type, date, status) {
    return {  name, type, date, status };
  }

//   const header=[
//       {
//           name:"Adı",
//           type:"Tipi",
//           date:"Tarixi",
//           status:"Statusu"
//       }
//   ]

  const datas = [
    createData('Rüfət Məmmədov',"Day off","06/25/2020", "Ləğv edildi"),
    createData('Hüseyn Lətifov İ', "Məzuniyyət", "06/20/2020","Gözləmədədir"),
    createData('Sevda Bıyık C', "Ezamiyyət", "06/19/2020", "Təsdiqləndi" ),
    createData('Əhəd Miriyev S', "Məzuniyyət", "05/10/2020","Təsdiqləndi" ),
  ];

  const style={
    fontSize:"18px",
    fontWeight:"bold"
  }
const TableTab=()=>{
    return(
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{background:"#F5F5F5"}}>
          <TableRow >
            <TableCell style={style}>Adı</TableCell>
            <TableCell  style={style} align="left">Tipi</TableCell>
            <TableCell style={style} align="left">Tarixi</TableCell>
            <TableCell style={style} align="left">Statusu</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((data) => (
            <TableRow
              key={data.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {data.name}
              </TableCell>
              <TableCell align="left">{data.type}</TableCell>
              <TableCell align="left">{data.date}</TableCell>
              <TableCell align="left">{data.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
export default TableTab
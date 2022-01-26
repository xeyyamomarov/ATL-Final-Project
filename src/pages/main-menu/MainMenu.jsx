import {TableBody,TableCell,Table,TableContainer,TableHead,TableRow,Paper,Card,CardContent,Typography} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import TableTab from 'components/Table/Table';


function createData( name, type, date, status) {
    return {  name, type, date, status };
  }

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
const MainMenu=()=>{
    return(
      <>
      <Card sx={{ minWidth: 275 ,marginBottom:2}}>
      <CardContent>
      <Card sx={{backgroundColor:"#F5F5F5",marginBottom:2}}>
        <CardContent sx={{display:"flex",justifyContent:"space-between"}}>  
        <Typography  variant='h6' position="relative" top="10px"  color="black" gutterBottom>
         Son sorğular
        </Typography>
        <Typography fontSize= "18px" position="relative" top="10px"  gutterBottom>
          <RefreshIcon onClick={()=>{
            console.log("clicked")
          }}/>
        </Typography>
        </CardContent>
      </Card>
      <TableContainer component={Paper}>
        <TableTab/>
    </TableContainer>
      </CardContent>
  
  </Card>
  <Card sx={{ minWidth: 275 }}>
  <CardContent>
  <Card sx={{backgroundColor:"#F5F5F5",marginBottom:2}}>
    <CardContent sx={{display:"flex",justifyContent:"space-between"}}>  
    <Typography variant='h6' position="relative" top="10px"  color="black" gutterBottom>
     Mənim sorğularım
    </Typography>
    <Typography fontSize= "18px" position="relative" top="10px" gutterBottom>
      <RefreshIcon onClick={()=>{
        console.log("clicked")
      }}/>
    </Typography>
    </CardContent>
  </Card>
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead sx={{background:"#F5F5F5"}}>
      <TableRow >
        <TableCell  style={style} align="left">Tipi</TableCell>
        <TableCell style={style} align="left">Statusu</TableCell>
        <TableCell style={style} align="left">Tarixi</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {datas.map((data) => (
        <TableRow
          key={data.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {data.type}
          </TableCell>
          <TableCell align="left">{data.status}</TableCell>
          <TableCell align="left">{data.date}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
  </CardContent>

</Card>
</>
    )
}
export default MainMenu
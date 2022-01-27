import {TableBody,TableCell,Table,TableContainer,TableHead,TableRow,Paper,Card,CardContent,Typography,Tooltip,Box,Avatar} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
// import Avatar from '@mui/material/Avatar';
import { useEffect,useState } from 'react';
import axios from 'axios';




  const style={
    fontSize:"18px",
    fontWeight:"bold"
  }
const Employees=()=>{
  const [employees,setEmployees] = useState([])
  useEffect(()=>{
    axios(" http://localhost:3000/employees")
    .then(data =>setEmployees(data.data))

  },[])
    return(
      <>
       <Card sx={{backgroundColor:"#F5F5F5",marginBottom:2,boxShadow:"none"}}>
        <CardContent sx={{display:"flex",justifyContent:"space-between"}}>  
        <Typography  variant='h6' position="relative" top="10px"  color="black" gutterBottom>
         Əməkdaşlar haqqında son məlumat
        </Typography>
        <Typography fontSize= "18px" position="relative" top="10px"  gutterBottom>
          <Tooltip title="Refresh">
          <RefreshIcon onClick={()=>{
            console.log("clicked")
          }}/>
          </Tooltip>
        </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 ,marginBottom:2}}>
      <CardContent>
      <TableContainer component={Paper}>
    </TableContainer>
      <TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead sx={{background:"#F5F5F5"}}>
    <TableRow
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
    <TableCell  style={style} align="left">Adı</TableCell>
      <TableCell  style={style} align="left">Vəzifə</TableCell>
      <TableCell style={style} align="left">Status</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {employees.map((data) => (
      <TableRow
        key={data.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
        <Box sx={{display:"flex",alignItems:"center"}}>
          <Avatar  sx={{marginRight:"10px"}}/>
           {data.name}
          </Box>
        </TableCell>
        <TableCell align="left">{data.position}</TableCell>
        <TableCell align="left">{data.status}</TableCell>
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
export default Employees
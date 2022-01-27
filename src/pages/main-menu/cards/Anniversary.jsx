import {TableBody,TableCell,Table,TableContainer,TableHead,TableRow,Paper,Card,CardContent,Typography,Tooltip,Box,Avatar} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useEffect,useState } from 'react';
import axios from "axios"




  const style={
    fontSize:"18px",
    fontWeight:"bold"
  }
const Anniversary=()=>{
  const [anniversary,setAnniversary] = useState([])
  useEffect(()=>{
    axios(" http://localhost:3000/anniversary")
    .then(data =>setAnniversary(data.data))

  },[])
    return(
      <>
       <Card sx={{backgroundColor:"#F5F5F5",marginBottom:2,boxShadow:"none"}}>
        <CardContent sx={{display:"flex",justifyContent:"space-between"}}>  
        <Typography  variant='h6' position="relative" top="10px"  color="black" gutterBottom>
         Qarşıdan gələn il dönümü
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
      <TableCell  style={style} align="left">İl</TableCell>
      <TableCell style={style} align="left">Tarix</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {anniversary.map((data) => (
      <TableRow
        key={data.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
        <Box sx={{display:"flex",alignItems:"center" }}>
          <Avatar sx={{marginRight:"10px"}} />
           {data.name}
          </Box>
        </TableCell>
        <TableCell align="left">{data.year}</TableCell>
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
export default Anniversary
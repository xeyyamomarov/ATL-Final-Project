import {TableBody,TableCell,Table,TableContainer,TableHead,TableRow,Paper,Card,CardContent,Typography,Tooltip} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState,useEffect } from 'react';
import axios from "axios"


  const style={
    fontSize:"18px",
    fontWeight:"bold"
  }
 const MyQuerises=()=>{
   const[datas,setDatas] = useState([])
   useEffect(()=>{
     axios("  http://localhost:3000/datas")
     .then(data =>setDatas(data.data))

   },[])
   return(

<>
<Card>
<Card sx={{backgroundColor:"#F5F5F5",marginBottom:2,boxShadow:"none"}}>
  <CardContent sx={{display:"flex",justifyContent:"space-between"}}>  
  <Typography variant='h6' position="relative" top="10px"  color="black" gutterBottom>
   Mənim sorğularım
  </Typography>
  <Typography fontSize= "18px" position="relative" top="10px" gutterBottom>
    <Tooltip title="Refresh">
    <RefreshIcon onClick={()=>{
      console.log("clicked")
    }}/>
    </Tooltip>
  </Typography>
  </CardContent>
</Card>
<Card sx={{ minWidth: 275,marginBottom:2 }}>
<CardContent>
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
</Card>
</>
   )
 }
 export default MyQuerises


import {TableBody,TableCell,Table,TableContainer,TableHead,TableRow,Paper,Card,CardContent,Typography,Tooltip} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState,useEffect } from 'react';
import axios from "axios"


  const style={
    fontSize:"18px",
    fontWeight:"bold",
  }
  const label=[
    {id:1,label:"Tipi"},
    {id:2,label:"Status"},
    {id:3,label:"Tarix"},
  ]
 const MyQuerises=()=>{
   const[datas,setDatas] = useState([])
   useEffect(()=>{
     axios("  http://localhost:3000/datas")
     .then(data =>setDatas(data.data))

   },[])
   return(


<Card sx={{marginBottom:2}}>
<Card sx={{backgroundColor:"#F5F5F5",marginBottom:2,boxShadow:"none"}}>
  <CardContent sx={{display:"flex",justifyContent:"space-between",padding:0,height:"40px"}}>  
  <Typography variant='h6' position="relative" top="15px" left="15px"  color="black" gutterBottom>
   Mənim sorğularım
  </Typography>
  <Typography fontSize= "18px" position="relative" top="18px" right="15px" gutterBottom>
    <Tooltip title="Refresh">
    <RefreshIcon sx={{cursor:"pointer"}} onClick={()=>{
      console.log("clicked")
    }}/>
    </Tooltip>
  </Typography>
  </CardContent>
</Card>
<Card sx={{ minWidth: 275,marginBottom:2 ,boxShadow:"none"}}>
<CardContent>
<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead sx={{background:"#F5F5F5"}}>
    <TableRow >
      {/* <TableCell  style={style} align="left">Tipi</TableCell>
      <TableCell style={style} align="left">Statusu</TableCell>
      <TableCell style={style} align="left">Tarixi</TableCell> */}
      {label.map(item=>{
        return(
          <TableCell  style={style} key={item.id}>{item.label}</TableCell>
        )
      })}
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
   )
 }
 export default MyQuerises


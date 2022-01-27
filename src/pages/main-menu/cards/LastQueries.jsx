import {TableBody,TableCell,Table,TableContainer,TableHead,TableRow,Paper,Card,CardContent,Typography,Tooltip} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import Avatar from '@mui/material/Avatar';
import { useEffect,useState } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';



  const style={
    fontSize:"18px",
    fontWeight:"bold"
  }
const LastQueries=()=>{
  const [datas,setDatas] = useState([])
  useEffect(()=>{
    axios("  http://localhost:3000/datas")
    .then(data =>setDatas(data.data))

  },[])
    return(
      <>
       <Card sx={{backgroundColor:"#F5F5F5",marginBottom:2,boxShadow:"none"}}>
        <CardContent sx={{display:"flex",justifyContent:"space-between"}}>  
        <Typography  variant='h6' position="relative" top="10px"  color="black" gutterBottom>
         Son sorğular
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
      <TableCell  style={style} align="left">Tipi</TableCell>
      <TableCell style={style} align="left">Statusu</TableCell>
      <TableCell style={style} align="left">Tarixi</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {datas.map((data) => (
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
        <TableCell align="left">{data.type}</TableCell>
        <TableCell align="left">{data.date}</TableCell>
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
export default LastQueries
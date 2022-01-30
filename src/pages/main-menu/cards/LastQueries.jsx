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
  const[isLoading,setIsLoading]=useState(false)
  const [datas,setDatas] = useState([])
  useEffect(()=>{
    axios("  http://localhost:3000/datas")
    .then(data =>setDatas(data.data))
    .catch(err=>console.log(err))

  },[isLoading])
    return(
      <Card sx={{marginBottom:2}}>
       <Card sx={{backgroundColor:"#F5F5F5",boxShadow:"none"}}>
        <CardContent sx={{display:"flex",justifyContent:"space-between",padding:0,height:"40px"}}>  
        <Typography  variant='h6' position="relative" top="5px" left="15px" color="black" gutterBottom>
         Son sorğular
        </Typography>
        <Typography fontSize= "18px" position="relative" top="8px" right="15px"  gutterBottom>
          <Tooltip title="Refresh">
          <RefreshIcon sx={{cursor:"pointer"}} onClick={()=>{
            setIsLoading(!isLoading)
          }}/>
          </Tooltip>
        </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 ,marginBottom:2,boxShadow:"none"}}>
      <CardContent>
      <TableContainer component={Paper}>
    </TableContainer>
      <TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
  <TableHead sx={{background:"#F5F5F5"}}>
    <TableRow
    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
  >
      {datas.map(data=>{
        return(
        <TableCell style={style} key={data.id} >{data.label}</TableCell>
        )
      })}
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
          <Avatar sx={{marginRight:"5px"}} />
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
  </Card>

    )
}
export default LastQueries
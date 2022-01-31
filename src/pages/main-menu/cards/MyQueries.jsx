import {Card,CardContent,Typography,Tooltip} from '@mui/material';
import Table from 'components/Table/Table';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useState,useEffect } from 'react';
import axios from "axios"


 
 const MyQuerises=()=>{
   const[isLoading,setIsLoading]=useState(false)
   const[myQueries,setMyQueries] = useState({})


   useEffect(()=>{
     axios("http://localhost:3000/mainpage")
     .then(data =>setMyQueries(data.data.myQueries))
     .catch(err=>console.log(err))

   },[isLoading])
   return(


<Card sx={{marginBottom:2}}>
<Card sx={{backgroundColor:"#F5F5F5",marginBottom:2,boxShadow:"none"}}>
  <CardContent sx={{display:"flex",justifyContent:"space-between",padding:0,height:"40px"}}>  
  <Typography variant='h6' position="relative" top="5px" left="15px"  color="black" gutterBottom>
   Mənim sorğularım
  </Typography>
  <Typography fontSize= "18px" position="relative" top="8px" right="15px" gutterBottom>
    <Tooltip title="Refresh">
    <RefreshIcon sx={{cursor:"pointer"}} onClick={()=>{
      setIsLoading(!isLoading)
    }}/>
    </Tooltip>
  </Typography>
  </CardContent>
</Card>
<Card sx={{ minWidth: 275,marginBottom:2 ,boxShadow:"none"}}>
<CardContent>
  <Table tbody={myQueries.tbody} thead={myQueries.thead}/>
</CardContent>
</Card>
</Card>
   )
 }
 export default MyQuerises


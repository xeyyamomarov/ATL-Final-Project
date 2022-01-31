import {Card,CardContent,Typography,Tooltip} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

import Table from 'components/Table/Table';
import { useEffect,useState } from 'react';
import axios from 'axios';


const DayOff=()=>{
  const[isLoading,setIsLoading]=useState(false)
  const [dayOff,setDayOff] = useState({})


  useEffect(()=>{
    axios("  http://localhost:3000/mainpage")
    .then(data =>setDayOff(data.data.dayOff))
    .catch(err=>console.log(err))

  },[isLoading])

  
    return(
      <Card sx={{marginBottom:2}}>
       <Card sx={{backgroundColor:"#F5F5F5",boxShadow:"none"}}>
        <CardContent sx={{display:"flex",justifyContent:"space-between",padding:0,height:"40px"}}>  
        <Typography  variant='h6' position="relative" top="5px" left="15px" color="black" gutterBottom>
         Bu gün ki Day off-lar
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
      <Table tbody={dayOff.tbody} thead={dayOff.thead}/>
</CardContent>

  </Card>
  </Card>

    )
}
export default DayOff
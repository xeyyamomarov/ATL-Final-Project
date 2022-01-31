import {Card,CardContent,Typography,Tooltip} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
// import Avatar from '@mui/material/Avatar';
import { useDispatch,useSelector } from 'react-redux';
import { CARDS_ACTIONS } from 'store/Cards';
import { CARDS_SELECTORS } from 'store/Cards';
import Table from 'components/Table/Table';
import { useEffect,useState } from 'react';
import axios from 'axios';


const LastQueries=()=>{
  const[isLoading,setIsLoading]=useState(false)
  const [lastQueries,setLastQueries] = useState({})
  const dispatch=useDispatch()
  const cards=useSelector(CARDS_SELECTORS.getCards)
  console.log(cards);



  useEffect(()=>{
    axios("  http://localhost:3000/mainpage")
    .then(data =>setLastQueries(data.data.lastQueries))
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
            dispatch(CARDS_ACTIONS.fetchCards())
          }}/>
          </Tooltip>
        </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 ,marginBottom:2,boxShadow:"none"}}>
      <CardContent>
      <Table tbody={lastQueries.tbody} thead={lastQueries.thead}/>
</CardContent>

  </Card>
  </Card>

    )
}
export default LastQueries
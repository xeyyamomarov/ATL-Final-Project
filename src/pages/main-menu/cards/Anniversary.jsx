import { Card, CardContent, Typography, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'components/Table/Table';


const Anniversary = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [anniversary, setAnniversary] = useState({})


  useEffect(() => {
    axios(" http://localhost:3000/mainpage")
      .then(data => {
        setAnniversary(data.data.anniversary)
        console.log(data.data.anniversary);
      })
      .catch(err => console.log(err))

  }, [isLoading])

  // anniversary && console.log(anniversary);


  return (

    <Card sx={{ marginBottom: 2 }}>
      <Card sx={{ backgroundColor: "#F5F5F5", boxShadow: "none" }}>
        <CardContent sx={{ display: "flex", justifyContent: "space-between", padding: 0, height: "40px" }}>
          <Typography variant='h6' position="relative" top="5px" left="15px" color="black" gutterBottom>
            Qarşıdan gələn il dönümü
          </Typography>
          <Typography fontSize="18px" position="relative" top="8px" right="15px" gutterBottom>
            <Tooltip title="Refresh">
              <RefreshIcon sx={{ cursor: "pointer" }} onClick={() => {
                setIsLoading(!isLoading)
              }} />
            </Tooltip>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, marginBottom: 2, boxShadow: "none" }}>
        <CardContent>
          <Table tbody={anniversary.tbody} thead={anniversary.thead} />
        </CardContent>
      </Card>
    </Card>

  )
}
export default Anniversary
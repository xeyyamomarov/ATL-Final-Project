import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { MAINPAGE_ACTIONS,MAINPAGE_SELECTORS } from "store/MainPage";
import { useSelector,useDispatch } from "react-redux";
import {useEffect} from "react"
import { AnniversaryTable } from "containers/AnniversaryContainer/AnniversaryTable";


export const AnniversaryContainer=()=>{

        const dispatch=useDispatch()
        const anniversaryData=useSelector(MAINPAGE_SELECTORS.getAnniversaryData)
        const handleClick=()=>dispatch(MAINPAGE_ACTIONS.fetchAnniversary())
      
        useEffect(()=>{
          dispatch(MAINPAGE_ACTIONS.fetchAnniversary());
         }, [dispatch]);
      
      
        return (
          <Card sx={{marginBottom:2}}>
            <Card sx={{ backgroundColor: "#F5F5F5", boxShadow: "none" }}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: 0,
                  height: "50px",
                }}
              >
                <Typography
                  variant="h6"
                  position="relative"
                  top="10px"
                  left="15px"
                  color="black"
                  gutterBottom
                >
                  Qarşıdan gələn il dönümü
                </Typography>
                <Typography
                  fontSize="18px"
                  position="relative"
                  top="12px"
                  right="15px"
                  gutterBottom
                >
                  <Tooltip title="Refresh">
                    <RefreshIcon
                      sx={{ cursor: "pointer" }}
                      onClick={handleClick}
                    />
                  </Tooltip>
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275, marginBottom: 2, boxShadow: "none" }}>
              <CardContent>
                <AnniversaryTable data={anniversaryData}/>
              </CardContent>
            </Card>
          </Card>
        );

}
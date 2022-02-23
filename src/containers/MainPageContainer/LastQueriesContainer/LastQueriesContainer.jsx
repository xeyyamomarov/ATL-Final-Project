import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useEffect } from "react";
import { MAINPAGE_ACTIONS,MAINPAGE_SELECTORS } from "store/MainPage";
import { useSelector,useDispatch } from "react-redux";
import {LastQueriesTable} from "./LastQueriesTable";

export const LastQueriesContainer=()=>{
    const dispatch=useDispatch()

  const lastQueriesData =useSelector(MAINPAGE_SELECTORS.getLastQueriesData)
  const lastQueriesLoading = useSelector(MAINPAGE_SELECTORS.getLastQueriesLoading)
  const handleClick=()=> dispatch(MAINPAGE_ACTIONS.fetchLastQueries())
  
  useEffect(()=>{
   dispatch(MAINPAGE_ACTIONS.fetchLastQueries());
  }, [dispatch]);

  return (
    <Card sx={{ marginBottom: 2 }}>
      <Card sx={{ backgroundColor: "#F5F5F5", boxShadow: "none" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 0,
            height: "60px",
          }}
        >
          <Typography
            variant="h6"
            position="relative"
            top="15px"
            left="15px"
            color="black"
            gutterBottom
          >
            Son sorğular
          </Typography>
          <Typography
            fontSize="28px"
            position="relative"
            top="12px"
            right="15px"
            gutterBottom
          >
            <Tooltip title="Refresh">
              <RefreshIcon onClick={handleClick}
                sx={{ cursor: "pointer" }}
              />
            </Tooltip>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, marginBottom: 2, boxShadow: "none" }}>
        <CardContent>
            <LastQueriesTable data={lastQueriesData} loading={lastQueriesLoading} />
        </CardContent>
      </Card>
    </Card>
  );
}
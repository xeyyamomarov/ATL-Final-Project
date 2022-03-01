import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useEffect } from "react";
import { MAINPAGE_ACTIONS,MAINPAGE_SELECTORS } from "store/MainPage";
import { useSelector,useDispatch } from "react-redux";
import { VacationBalanceTable } from "./VacationBalanceTable";


export const VacationBalanceContainer=()=>{

  const dispatch=useDispatch();
  const VacationBalanceData=useSelector(MAINPAGE_SELECTORS.getVacationBalanceData)
  const VacationBalanceLoading = useSelector(MAINPAGE_SELECTORS.getVacationBalanceLoading)
  const handleClick=()=>dispatch(MAINPAGE_ACTIONS.fetchVacationBalance())

  useEffect(()=>{
    dispatch(MAINPAGE_ACTIONS.fetchVacationBalance());
   }, [dispatch]);

  return (
    <Card sx={{marginBottom:2}}>
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
            top="10px"
            left="15px"
            color="black"
            gutterBottom
          >
            Məzuniyyət balansı
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
          <VacationBalanceTable data={VacationBalanceData} loading={VacationBalanceLoading}/>
        </CardContent>
      </Card>
    </Card>
  );

}
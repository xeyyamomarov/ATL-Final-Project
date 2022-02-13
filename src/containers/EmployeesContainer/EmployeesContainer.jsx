import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { MAINPAGE_ACTIONS,MAINPAGE_SELECTORS } from "store/MainPage";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { EmployeesTable } from "./EmployeesTable";

export const EmployeesContainer = () => {

  const dispatch=useDispatch()
  const employeesData=useSelector(MAINPAGE_SELECTORS.getEmployeesData)
  const handleClick=()=>dispatch(MAINPAGE_ACTIONS.fetchEmployees())

  useEffect(()=>{
    dispatch(MAINPAGE_ACTIONS.fetchEmployees());
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
            Əməkdaşlar haqqında son məlumat
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
          <EmployeesTable data={employeesData}/>
        </CardContent>
      </Card>
    </Card>
  );
};

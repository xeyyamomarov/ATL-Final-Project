import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import { Table } from "components/Table";
import RefreshIcon from "@mui/icons-material/Refresh";
import { MAINPAGE_ACTIONS,MAINPAGE_SELECTORS } from "store/MainPage";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";

export const MyQueriesContainer = () => {
  const thead=[
    {
      key: "type",
      label: "Tipi"
    },
    {
      key: "status",
      label: "Status"
    },
    {
      key: "date",
      label: "Tarixi"
    }
  ]

  const dispatch =useDispatch()
  const myQueriesData=useSelector(MAINPAGE_SELECTORS.getMyQueiresData)
  const handleClick=()=> dispatch(MAINPAGE_ACTIONS.fetchMyQueries())

  useEffect(()=>{
    dispatch(MAINPAGE_ACTIONS.fetchMyQueries());
   }, [dispatch]);

  return (
    <Card sx={{marginBottom:2}}>
      <Card
        sx={{ backgroundColor: "#F5F5F5", marginBottom: 2, boxShadow: "none" }}
      >
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
            Mənim sorğularım
          </Typography>
          <Typography
            fontSize="18px"
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
          <Table tbody={myQueriesData} thead={thead} />
        </CardContent>
      </Card>
    </Card>
  );
};


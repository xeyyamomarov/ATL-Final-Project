import { Card, CardContent, Typography, Tooltip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Table } from "components/Table";
import { LastQueriesTableHeader } from './LastQueriesTableHeader';
import { CARDS_ACTIONS,CARDS_SELECTORS } from "store/Cards";
import { useSelector,useDispatch } from "react-redux";
export const LastQueries = ({data}) => {

  const dispatch=useDispatch()

  const dataLoading=useSelector(CARDS_SELECTORS.getCardsLoading);
  const thead = LastQueriesTableHeader();

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
              <RefreshIcon onClick={()=>{
                  dispatch(CARDS_ACTIONS.fetchCards())
              }}
                sx={{ cursor: "pointer" }}
              />
            </Tooltip>
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, marginBottom: 2, boxShadow: "none" }}>
        <CardContent>
          <Table tbody={data?.tbody} thead={thead} />
        </CardContent>
      </Card>
      {/* <ReactLoading type="spin" color="#1877f2" /> */}
      { dataLoading && "Loading"}
    </Card>
  );
};

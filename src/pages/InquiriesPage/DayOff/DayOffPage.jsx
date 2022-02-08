import { Box } from "@mui/material";
import QueriesMainPage from "../QueriesMainPage"
import QueryForming from "./components/QueryForming";
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLES_SELECTORS, TOGGLES_ACTIONS } from "store/Toggles";
import { Testquery } from "./components/Test";


const DayOffPage = () => {
  const dispatch = useDispatch();
  const open = useSelector(TOGGLES_SELECTORS.getAddNewToggle)
  const close = () => dispatch(TOGGLES_ACTIONS.setAddNewDialog())

  return (
    <>
      {open ?
        <Testquery />
        // <QueryForming />
        :
        <Box padding="16px">
          <QueriesMainPage />
        </Box>}
    </>
  );
}

export default DayOffPage;
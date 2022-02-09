import { Box, Collapse } from "@mui/material";
import { AddButton } from "components/Buttons";
import { SearchButton } from "components/Buttons";
import { SearchBar } from "components/SearchBar";
import { useState } from "react";

// import QueryForming from "./components/QueryForming";
import { useDispatch } from 'react-redux';
import { TOGGLES_ACTIONS } from "store/Toggles";
import { InquiriesSearchForm } from "../components/InquiriesSearchForm";
import Inquiries from "../InquiriesPage";
// import { Testquery } from "./components/Test";


const DayOff = () => {
  const dispatch = useDispatch();
  const [searchOpen, setSearchOpen] = useState(false);
  // const open = useSelector(TOGGLES_SELECTORS.getAddNewToggle)
  const addNewHandleClick = () => dispatch(TOGGLES_ACTIONS.setAddNewDialog())

  return (
    <>
      <SearchBar buttons={
        <>
          <SearchButton onClick={() => {
            setSearchOpen(!searchOpen);
          }} />
          <AddButton onClick={addNewHandleClick} />
        </>
      } />

      <Box padding="16px">
        <Collapse in={searchOpen}>{<InquiriesSearchForm />}</Collapse>
        <Inquiries />
      </Box>
    </>
  );
}

export default DayOff;
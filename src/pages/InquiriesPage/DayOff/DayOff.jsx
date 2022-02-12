import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Box, Collapse } from "@mui/material";
import { AddButton, SearchButton } from "components/Buttons";
import { SearchBar } from "components/SearchBar";
import { Table } from "components/Table";
import { InquiriesSearchForm } from "../components/InquiriesSearchForm";
import { QUERIES_ACTIONS, QUERIES_SELECTORS } from "store/Queries";


export const DayOff = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchOpen, setSearchOpen] = useState(false);
  const { queries } = useSelector(QUERIES_SELECTORS.getQueries);

  const addNewHandleClick = () => navigate("/inquiries/day-off/new")

  const thead = [
    {
      key: "fullName",
      label: "Ad Soyad Ata",
      minWidth: "220"
    },
    {
      key: "date",
      label: "Tarix",
      minWidth: "120"
    },
    {
      key: "status",
      label: "Status",
      minWidth: "170"
    },
  ]

  
  useEffect(() => {
    dispatch(QUERIES_ACTIONS.fetchQueries())
  }, [dispatch])

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
        <Table thead={thead} tbody={queries} pagination />
      </Box>
    </>
  );
}
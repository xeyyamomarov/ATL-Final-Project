import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Table } from "components/Table";
import { QUERIES_ACTIONS, QUERIES_SELECTORS } from "store/Queries";
import { InquiriesSearchForm } from "./components/InquiriesSearchForm";
import { Collapse } from "@mui/material";
import { TOGGLES_SELECTORS } from 'store/Toggles';


const Inquiries = () => {

  const dispatch = useDispatch();
  const { queries } = useSelector(QUERIES_SELECTORS.getQueries);
  const search = useSelector(TOGGLES_SELECTORS.getSearchForm)
  const thead = [
    {
      id: "fullName",
      label: "Ad Soyad Ata",
      minWidth: "220"
    },
    {
      id: "date",
      label: "Tarix",
      minWidth: "120"
    },
    {
      id: "status",
      label: "Status",
      minWidth: "170"
    },
  ]

  useEffect(() => {
    dispatch(QUERIES_ACTIONS.fetchQueries())
  }, [dispatch])

  return (
    <>
      <Collapse in={search}>{<InquiriesSearchForm />}</Collapse>
      <Table thead={thead} tbody={queries} />
    </>);
}

export default Inquiries;
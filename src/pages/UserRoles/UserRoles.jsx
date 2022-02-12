import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Table } from "components/Table";
import { USER_ROLES_ACTIONS, USER_ROLES_SELECTORS } from "store/UserRoles";
import { NewRoleDialog, EditRoleDialog, DeleteRoleDialog } from "./components/Dialogs";
import { SearchBar } from "components/SearchBar/SearchBar";
import { SearchButton } from "components/Buttons";
import { AddButton } from "components/Buttons";
import { TOGGLES_ACTIONS } from "store/Toggles";
import { Box, Collapse } from "@mui/material";
import { SearchForm } from "./components/SearchForm";


export const UserRoles = () => {
  const dispatch = useDispatch();
  const [searchOpen, setSearchOpen] = useState(false);
  const { userroles } = useSelector(USER_ROLES_SELECTORS.getUserRoles);
  const loading = useSelector(USER_ROLES_SELECTORS.getUserRolesLoading);
  const addNewHandleClick = () => dispatch(TOGGLES_ACTIONS.setAddNewDialog())


  const thead = [
    {
      key: "name",
      label: "Adı",
      minWidth: "220"
    },
    {
      key: "isStatic",
      label: "Statikdir?",
      minWidth: "120"
    },
    {
      key: "description",
      label: "Təsviri",
      minWidth: "170"
    },
    {
      key: "roleIcons",
      label: "",
      minWidth: "170"
    },
  ]

  useEffect(() => {
    dispatch(USER_ROLES_ACTIONS.fetchUserRoles())
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
        <Collapse in={searchOpen}>{<SearchForm />}</Collapse>
        <Table thead={thead} tbody={userroles} loading={loading} pagination />
        <NewRoleDialog />
        <EditRoleDialog />
        <DeleteRoleDialog />
      </Box>
    </>
  );
};
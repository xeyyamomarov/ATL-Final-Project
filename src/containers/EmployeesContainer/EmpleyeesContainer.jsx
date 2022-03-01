import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { EmployeesTable } from "./EmpleyeesTable";
import { EMPLOYEES_ALL_ACTIONS, EMPLOYEES_ALL_SELECTORS } from "store/Employees";
import { SearchBar } from "components/SearchBar";
import { AddButton, SearchButton } from "components/Buttons";
import { TOGGLES_ACTIONS } from "store/Toggles";
import { Box, Collapse } from '@mui/material';
import { SearchForm } from "containers/EmployeesContainer/components/SearchForm";

export const EmployeesContainer = () => {

    const dispatch = useDispatch();
    const employees = useSelector(EMPLOYEES_ALL_SELECTORS.getEmployeesAll);
    const [searchOpen, setSearchOpen] = useState(false);
    const addNewHandleClick = () => dispatch(TOGGLES_ACTIONS.setAddNewDialog())


    useEffect(() => {
        dispatch(EMPLOYEES_ALL_ACTIONS.fetchEmployeesAll())
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
                <EmployeesTable  data={employees} pagination/>
            </Box>
            {/* <AddNewUserDialog />
            <EditUserDialog />
            <PasswordUpdateDialog /> */}
        </>
    );
}

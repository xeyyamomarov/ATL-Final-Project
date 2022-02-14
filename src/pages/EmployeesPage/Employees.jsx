//<section key="employees-page">
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Table } from "components/Table";
import { EMPLOYEES_ACTIONS, EMPLOYEES_SELECTORS } from "store/Employees";
//import { AddNewUserDialog, EditUserDialog, PasswordUpdateDialog } from "./components/Dialogs";
import { SearchBar } from "components/SearchBar";
import { Box, Collapse } from '@mui/material';
import { SearchForm } from "containers/UsersContainer/components/SearchForm";
import { AddButton, SearchButton } from "components/Buttons";
import { thead } from "./constants";

const EmployeesPage = () => {

    const dispatch = useDispatch();
    const employees = useSelector(EMPLOYEES_SELECTORS.getEmployees);
    const [searchOpen, setSearchOpen] = useState(false);


    useEffect(() => {
        dispatch(EMPLOYEES_ACTIONS.fetchEmployees())
    }, [dispatch])

    return (
        <>
            <SearchBar buttons={
                <>
                    <SearchButton onClick={() => {
                        setSearchOpen(!searchOpen);
                    }} />
                    <AddButton onClick={() => {

                    }} />
                </>
            } />
            <Box padding="16px">
                <Collapse in={searchOpen}>{<SearchForm />}</Collapse>
                <Table thead={thead} tbody={employees} pagination />
            </Box>
            {/* <AddNewUserDialog />
            <EditUserDialog />
            <PasswordUpdateDialog /> */}
        </>
    );
}

export default EmployeesPage;
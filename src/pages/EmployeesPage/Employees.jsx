//<section key="employees-page">
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Table } from "components/Table";
import { USERS_ACTIONS, USERS_SELECTORS } from "store/Users";
//import { AddNewUserDialog, EditUserDialog, PasswordUpdateDialog } from "./components/Dialogs";
//import { SearchBar } from "components/SearchBar";
import { Box } from '@mui/material';
// import { SearchForm } from "pages/Users/components/SearchForm";
//import { AddButton, SearchButton } from "components/Buttons";

const EmployeesPage = () => {

    const dispatch = useDispatch();
    const { users } = useSelector(USERS_SELECTORS.getUsers);
    // const [searchOpen, setSearchOpen] = useState(false);
    const thead = [
        {
            key: "fullName",
            label: "A.S.A.",
            style: { minWidth: 220}
        },
        {
            key: "username",
            label: "İstifadəçi adı",
            minWidth: { minWidth: 120}
        },
        {
            key: "email",
            label: "Elektron poçt",
            minWidth: { minWidth: 170}
        },
        {
            key: "position",
            label: "Vəzifə",
            minWidth: { minWidth: 170}
        },
        {
            key: "department",
            label: "Şöbə",
            minWidth: { minWidth: 170}
        },
        {
            key: "phone",
            label: "Əlaqə nömrəsi",
            minWidth: { minWidth: 170}
        },
        {
            key: "icons",
            label: "",
            minWidth: { minWidth: 12}
        }
    ]

    useEffect(() => {
        dispatch(USERS_ACTIONS.fetchUsers())
    }, [dispatch])

    return (
        <>
            {/* <SearchBar buttons={
                <>
                    <SearchButton onClick={() => {
                        setSearchOpen(!searchOpen);
                    }} />
                    <AddButton onClick={() => {

                    }} />
                </>
            } /> */}
            <Box padding="16px">
                {/* <Collapse in={searchOpen}>{<SearchForm />}</Collapse> */}
                <Table thead={thead} tbody={users} pagination />
            </Box>
            {/* <AddNewUserDialog />
            <EditUserDialog />
            <PasswordUpdateDialog /> */}
        </>
    );
}

export default EmployeesPage;
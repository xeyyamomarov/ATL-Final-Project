import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Table } from "components/Table";
import { USERS_ACTIONS, USERS_SELECTORS } from "store/Users";
import { AddNewUserDialog, EditUserDialog, PasswordUpdateDialog } from "./components/Dialogs";


const Users = () => {

  const dispatch = useDispatch();
  const { users } = useSelector(USERS_SELECTORS.getUsers);
  const thead = [
    {
      id: "fullName",
      label: "A.S.A.",
      minWidth: "220"
    },
    {
      id: "username",
      label: "İstifadəçi adı",
      minWidth: "120"
    },
    {
      id: "email",
      label: "Elektron poçt",
      minWidth: "170"
    },
    {
      id: "position",
      label: "Vəzifə",
      minWidth: "170"
    },
    {
      id: "phone",
      label: "Əlaqə nömrəsi",
      minWidth: "170"
    },
    {
      id: "icons",
      label: "",
      minWidth: "12px"
    }
  ]

  useEffect(() => {
    dispatch(USERS_ACTIONS.fetchUsers())
  }, [dispatch])


  return (
    <>
      <Table thead={thead} tbody={users} pagination />
      <AddNewUserDialog />
      <EditUserDialog />
      <PasswordUpdateDialog />
    </>
  );
}

export default Users;
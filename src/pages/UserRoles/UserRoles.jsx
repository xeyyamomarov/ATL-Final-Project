import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Table } from "components/Table";
import { USER_ROLES_ACTIONS, USER_ROLES_SELECTORS } from "store/UserRoles";
import { NewRoleDialog, EditRoleDialog, DeleteRoleDialog } from "./Dialogs";


const UserRoles = () => {

  const dispatch = useDispatch();
  const { userroles } = useSelector(USER_ROLES_SELECTORS.getUserRoles);
  
  const thead = [
    {
      id: "name",
      label: "Adı",
      minWidth: "220"
    },
    {
      id: "isStatic",
      label: "Statikdir?",
      minWidth: "120"
    },
    {
      id: "description",
      label: "Təsviri",
      minWidth: "170"
    },
    {
      id: "roleIcons",
      label: "",
      minWidth: "170"
    },
  ]

  useEffect(() => {
    dispatch(USER_ROLES_ACTIONS.fetchUserRoles())
  }, [dispatch])


  return (
    <>
      <Table thead={thead} tbody={userroles} pagination />
      <NewRoleDialog />
      <EditRoleDialog />
      <DeleteRoleDialog />
    </>
  );
}

export default UserRoles;
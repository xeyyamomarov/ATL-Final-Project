import { Box, MenuItem } from "@mui/material";
import { MoreOptions } from "components/MoreOptions";
import { useDispatch } from "react-redux";
import { TOGGLES_ACTIONS } from "store/Toggles";
import { EditUserRoles } from "../components/EditUserRoles";



export const UserRolesTableHeader = () => {
  const dispatch = useDispatch();
  const handleOpenClick = () => dispatch(TOGGLES_ACTIONS.setDeleteRoleDialog())

  return [
    {
      key: "name",
      label: "Adı",
      style: { minWidth: 220 },
    },
    {
      key: "isStatic",
      label: "Statikdir?",
      style: { minWidth: 120 },
    },
    {
      key: "description",
      label: "Təsviri",
      style: { minWidth: 170 },
    },
    {
      key: "actions",
      label: "",
      style: { minWidth: 170 },
      render(row) {
        return (
          <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center'>
            <EditUserRoles userId={row.id} />
            <MoreOptions>
              <MenuItem onClick={handleOpenClick}>Sil</MenuItem>
            </MoreOptions>
          </Box>
        )
      }
    },
  ]
};
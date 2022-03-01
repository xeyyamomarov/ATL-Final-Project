import { Typography, Avatar, Box, MenuItem } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { EditUser } from 'containers/UsersContainer/components/EditUser';
import { MoreOptions } from 'components/MoreOptions';
import { useDispatch } from "react-redux";
import { TOGGLES_ACTIONS } from "store/Toggles";
import { ShowHide } from "./components/ShowHide";

const useStyles = makeStyles({
  avatar: {
    width: 28,
    height: 28,
    display: 'flex',
    marginRight: '10px',
  },
  data: {
    fontSize: "14px",
    fontWeight: "400"
  },

})


export const EmployeesTableHeader = () => {

  const dispatch = useDispatch();
  const classes = useStyles();

  return [
    {
      key: "fullName",
      label: "A.S.A.",
      style: { minWidth: 220 },
      render: (row) => {
        return (
          <>
            <Avatar
              className={classes.avatar}
              alt={`${row.fullName}`}
              src={row.avatar}
            />
            <Typography
              className={classes.data}
            >
              {row.fullName}
            </Typography>
          </>
        );
      }
    },
    {
      key: "email",
      label: "Elektron poçt",
      minWidth: { minWidth: 170 }
    },
    {
      key: "position",
      label: "Vəzifə",
      minWidth: { minWidth: 170 }
    },
    {
      key: "department",
      label: "Şöbə",
      minWidth: { minWidth: 170 }
    },
    {
      key: "phone",
      label: "Əlaqə nömrəsi",
      minWidth: { minWidth: 170 }
    },
    {
      key: "icons",
      label: "",
      minWidth: { minWidth: 12 }
    },
    {
      key: "actions",
      label: "",
      style: { minWidth: 12 },
      render(row) {
        return (
          <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center'>
            <ShowHide userId={row.id} />
            <MoreOptions>
              <MenuItem onClick={() => console.log('download')}>Sənədi yüklə</MenuItem>
              <MenuItem onClick={() => console.log('edit')}>Redaktə et</MenuItem>
              <MenuItem onClick={() => console.log('delete')}>Sil</MenuItem>
            </MoreOptions>
            {/* <EditUser userId={row.id} />
            <MoreOptions>
              <MenuItem onClick={() => dispatch(TOGGLES_ACTIONS.setDeactivateUser())}>Deaktivləşdirin</MenuItem>
              <MenuItem onClick={() => dispatch(TOGGLES_ACTIONS.setPasswordUpdateDialog())}>Şifrəni yenilə</MenuItem>
            </MoreOptions> */}
          </Box>
        )
      }
    }
  ]
};


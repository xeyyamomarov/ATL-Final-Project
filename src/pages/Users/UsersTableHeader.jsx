import { Typography, Avatar, Box, MenuItem } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { EditUser } from 'pages/Users/components/EditUser';
import { MoreOptions } from 'pages/Users/components/MoreOptions';
import { useDispatch } from "react-redux";
import { TOGGLES_ACTIONS } from "store/Toggles";

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


export const UsersTableHeader = () => {

  const dispatch = useDispatch();
  const classes = useStyles();

  return [
    {
      key: "fullName",
      label: "A.S.A.",
      minWidth: "220px",
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
      key: "username",
      label: "İstifadəçi adı",
      minWidth: "120px"
    },
    {
      key: "email",
      label: "Elektron poçt",
      minWidth: "170px"
    },
    {
      key: "position",
      label: "Vəzifə",
      minWidth: "170px"
    },
    {
      key: "phone",
      label: "Əlaqə nömrəsi",
      minWidth: "170px"
    },
    {
      key: "actions",
      label: "",
      minWidth: "12px",
      render(row) {
        return (
          <Box display='flex' width='100%' justifyContent='flex-end' alignItems='center'>
            <EditUser userId={row.id} />
            <MoreOptions userId={row.id}>
              <MenuItem onClick={() => console.log(`User ${row.id} Deactivated`)}>Deaktivləşdirin</MenuItem>
              <MenuItem onClick={() => dispatch(TOGGLES_ACTIONS.setPasswordUpdateDialog())}>Şifrəni yenilə</MenuItem>
            </MoreOptions>
          </Box>
        )
      }
    }
  ]
};
import { Typography, Avatar, Box, MenuItem, IconButton, Tooltip } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { MoreOptions } from 'components/MoreOptions';
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

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

  // const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const addNewHandleClick = () => navigate("/employees/details");

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
            <Tooltip title="detallar">
              <IconButton onClick={addNewHandleClick}>
                <RemoveRedEyeIcon sx={{ color: 'gray' }} />
              </IconButton>
            </Tooltip>

            <MoreOptions>
              <MenuItem onClick={() => console.log('edit')}>Redaktə et</MenuItem>
              <MenuItem onClick={() => console.log('delete')}>Arxiv</MenuItem>
            </MoreOptions>
          </Box>
        )
      }
    }
  ]
};


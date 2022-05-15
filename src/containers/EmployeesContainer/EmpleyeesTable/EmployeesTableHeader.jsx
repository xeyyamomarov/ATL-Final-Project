import { Typography, Avatar, Box, MenuItem, IconButton, Tooltip } from "@mui/material";
import { MoreOptions } from 'components/MoreOptions';
import { useNavigate } from "react-router-dom";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useStyles } from "../Styles";



export const EmployeesTableHeader = () => {

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
      style: { minWidth: 170 }
    },
    {
      key: "position",
      label: "Vəzifə",
      style: { minWidth: 170 }
    },
    {
      key: "department",
      label: "Şöbə",
      style: { minWidth: 170 }
    },
    {
      key: "phone",
      label: "Əlaqə nömrəsi",
      style: { minWidth: 170 }
    },
    {
      key: "icons",
      label: "",
      style: { minWidth: 12 }
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


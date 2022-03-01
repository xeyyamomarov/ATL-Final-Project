import { Typography, Box } from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  typography: {
    fontSize: "12px",
  },
  icon: {
    cursor: "pointer",
  },
  boxContent: {
    border: "1px solid black",
    gap: 2,
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export const ProfileSecurity = () => {
  const passNavigate = useNavigate();

  const passHandleClick = () => passNavigate("/profile/change-password");

  const classes = useStyles();
  return (
    <Box className={classes.boxContent}>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            transform: "rotate(45deg)",
            gap:10
          }}
        >
          <KeyIcon />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6">Şifrəni dəyişdir</Typography>
          <Typography className={classes.typography}>
            Başqa bir yerdə istifadə etmədiyin güclü bir şifrədən istifadə
            etməyin yaxşı fikirdir.
          </Typography>
        </Box>
      </Box>
      <Box>
        <EditIcon className={classes.icon} onClick={passHandleClick} />
      </Box>
    </Box>
  );
};

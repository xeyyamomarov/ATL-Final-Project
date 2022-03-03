import { CardContent, Typography, Box } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import { makeStyles } from "@mui/styles";
import SecurityIcon from "@mui/icons-material/Security";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  content: {
    cursor: "pointer",
    "&:hover": {
      background: "#F3EBFB",
      borderRadius: "4px",
    },
  },
  box: {
    height: "100%",
    width: "300px",
    borderRight: "1px solid gray",
    padding: "16px",
  },
  icon: {
    position: "relative",
    top: "5px",
  },
  typography: {
    color: "#424242",
    fontSize: "14px",
    "&:hover": {
      color: "#9B5AE1",
    },
  },
});

export const ProfileSettings = () => {
  const classes = useStyles();

  const userNavigate = useNavigate();
  const securityNavigate = useNavigate();

  const userHandleClick = () => userNavigate("/profile/settings");

  const securityHandleClick = () => securityNavigate("/profile/security");

  return (
    <Box className={classes.box}>
      <CardContent onClick={userHandleClick} className={classes.content}>
        <Typography className={classes.typography}>
          <SettingsIcon className={classes.icon} />
          Hesab parametrləri
        </Typography>
      </CardContent>
      <CardContent onClick={securityHandleClick} className={classes.content}>
        <Typography className={classes.typography}>
          <SecurityIcon className={classes.icon} />
          Təhlükəsizlik və Giriş
        </Typography>
      </CardContent>
    </Box>
  );
};

import { AppBar, Box, Toolbar, Typography, IconButton, MenuItem, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from './Styles';
import { useNavigate } from "react-router-dom";
import { ProfileOptions } from "pages/Profile/ProfileOptions";
import { useState } from "react";

export default function ButtonAppBar({ open, setOpen }) {

  const navigate = useNavigate();
  const classes = useStyles();
  const mediaQuery = window.matchMedia('(min-width: 600px)');
  const [userName, setUserName] = useState(mediaQuery.matches || false);
  mediaQuery.addEventListener('change', e => setUserName(e.matches));

  return (
    <Box className={classes.navBar}>
      <AppBar position="static" className={classes.appBar} >
        <Toolbar className={classes.toolBar}>
          <Box>
            <IconButton
              onClick={() => setOpen(!open)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.iconButton}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box className={classes.profileContainer}>
            <Box>
              <ProfileOptions>
                <MenuItem onClick={() => navigate("/profile/settings")}>
                  Profil
                </MenuItem>
                <MenuItem onClick={() => navigate("/login")}>Çıxış</MenuItem>
              </ProfileOptions>
            </Box>
            { userName &&<Typography component="div" className={classes.userName}>Aydin Abbasov</Typography>}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
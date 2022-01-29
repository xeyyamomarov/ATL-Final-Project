import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";

const NavBar = () => {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          flexGrow: 1,
          height: 56,
          backgroundColor: "red",
        }}
      >
        <Toolbar>
          <MenuIcon />
          <AccountCircle />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Aydın Abbasov
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;

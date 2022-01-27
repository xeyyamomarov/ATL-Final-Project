// import SvgIcon from "@material-ui/core/SvgIcon";
import { ReactComponent as Logo } from "assets/logo/logo.svg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
// import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: "auto",
        height: "100vh",
        backgroundColor: "#9B5AE1",
      }}
    >
      <Toolbar
        sx={{
          width: 290,
          height: 99,
        }}
      >
        <Logo />
      </Toolbar>
      <List>
        {["Əməkdaşlar", "Sorğular", "Elanlar", "Parametrlər"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {/*  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
            </ListItemIcon>
            <ListItemText primary={text} sx={{color:'#fff'}}/>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;

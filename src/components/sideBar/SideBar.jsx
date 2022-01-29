import { ReactComponent as Logo } from "assets/logo/logo.svg";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import sideBarMenuİtems from "./sideBarMenuİtems";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

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
          width: 118,
          height: 16,
        }}
      >
        <Logo />
      </Toolbar>
      <List>
        {sideBarMenuİtems.map(item => (
          <ListItem button key={item.key} component={Link} to={item.path}>
            <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{
                color: "#fff",
                fontSize: 14,
              }}
            />
            {item.items.length > 0 && <ExpandMoreIcon sx={{ color: "#fff" }} />}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;

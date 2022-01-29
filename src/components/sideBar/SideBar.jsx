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
import { Collapse } from '@mui/material';
import { useState } from "react";

const SideBar = () => {
  const [collapse, setCollapse] = useState({});
  return (
    <Box
      sx={{
        width: "auto",
        minHeight: "100vh",
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
        {sideBarMenuİtems.map(item => {

          return (
            <>
              <ListItem onClick={() => setCollapse(old => ({...old, [item.key]: !old[item.key]}) )} button key={item.key} component={Link} to={item.path}>
                <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    color: "#fff",
                    fontSize: 14,
                  }}
                />
              </ListItem>
              {
                item.items?.length > 0 && (
                  <Collapse in={collapse[item.key]}>
                    <List>
                      {
                        item.items.map(subItem => (
                          <ListItem button key={subItem.key} component={Link} to={subItem.path}>
                            <ListItemIcon sx={{ color: "#fff" }}>{subItem.icon}</ListItemIcon>
                            <ListItemText
                              primary={subItem.label}
                              primaryTypographyProps={{
                                color: "#fff",
                                fontSize: 14,
                              }}
                            />
                          </ListItem>
                        ))
                      }

                    </List>
                  </Collapse>
                )
              }
            </>
          )
        }
        )}
      </List>
    </Box>
  );
};

export default SideBar;

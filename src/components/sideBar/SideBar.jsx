import { ReactComponent as Logo } from "assets/logo/logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
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

const SideBar = ({ open }) => {
  const [collapse, setCollapse] = useState({});
  const location = useLocation();
  const collapseHandler = (item) => item.items?.length > 0 && setCollapse(old => ({ ...old, [item.key]: !old[item.key] }));
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: 2,
        backgroundColor: "#9B5AE1",
      }}

    >
      <Collapse orientation="horizontal" in={open} collapsedSize={70}>
      <Toolbar
        sx={{
          width: 180,
          height: 16
        }}
      >
        {open && <Logo />}
      </Toolbar>
      <List>
        {sideBarMenuİtems.map((item, index) => {

          return (
            <div key={index}>
              <ListItem onClick={() => collapseHandler(item)} button key={item.key} component={item.path && NavLink} to={item.path} activeClassName={location.pathname !== item.path ? null : 'selected'} >
                <ListItemIcon width={{ sm: 48, md: 96, lg: 192, xl: 384 }} sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
                {open && <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    color: "#fff",
                    fontSize: 14,
                  }}
                />}
                {open && (item.items?.length > 0 && (collapse[item.key] ? <ExpandLessIcon sx={{ color: "#fff", marginLeft:7 }} /> : <ExpandMoreIcon sx={{ color: "#fff", marginLeft:7}} />))}
              </ListItem>
              {
                open && item.items?.length > 0 && (
                  <Collapse in={collapse[item.key]} key={`${item.key}-collapse`}>
                    <List key={`${item.key}-sub-list`}>
                      {
                        item.items.map(subItem => (
                          <ListItem button key={subItem.key} component={NavLink} to={subItem.path} activeClassName={location.pathname !== subItem.path ? null : "selected"}>
                            <ListItemIcon sx={{ color: "#fff" }}>{subItem.icon}</ListItemIcon>
                            {open && <ListItemText
                              primary={subItem.label}
                              primaryTypographyProps={{
                                color: "#fff",
                                fontSize: 14,
                              }}
                            />}
                          </ListItem>
                        ))
                      }
                    </List>
                  </Collapse>
                )
              }
            </div>
          )
        }
        )}
      </List>
      </Collapse>
    </Box>
  );
};

export default SideBar;

